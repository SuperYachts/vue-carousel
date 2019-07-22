<template>
    <div
        :style="{
            width: `calc(100% + ${ margin }px)`,
            'margin-right': `-${ halfMargin }px`,
            'margin-left': `-${ halfMargin }px`,
        }"
        class="efficient-carousel-container"
    >
        <translate-scroll
            :value="translateScroll"
            @panning-start="handlePanningStart"
            @panning="handlePanning"
            @panning-stop="handlePanningStop"
        >
            <global-events
                target="window"
                @resize="setClientWidth"
            />

            <div class="efficient-carousel">
                <div
                    v-for="{ item, index } in itemsRendered"
                    :key="index"
                    :style="{
                        'padding-right': `${ halfMargin }px`,
                        'padding-left': `${ halfMargin }px`,
                        width: `${ 100 / numberInView }%`,
                    }"
                    class="efficient-carousel-item"
                >
                    <slot :item="item" :index="index" />
                </div>
            </div>
        </translate-scroll>
    </div>
</template>

<script>
    import VueSetTimeout from '@netsells/vue-set-timeout';
    import GlobalEvents from 'vue-global-events';

    import TranslateScroll from './TranslateScroll';

    export default {
        name: 'efficient-carousel',

        components: {
            GlobalEvents,
            TranslateScroll,
        },

        mixins: [
            VueSetTimeout,
        ],

        props: {
            items: {
                type: Array,
                required: true,
            },

            numberInView: {
                type: Number,
                default: 1,
            },

            margin: {
                type: Number,
                default: 20,
            },

            animationStep: {
                type: Number,
                default: 10,
            },

            animationSpeed: {
                type: Number,
                default: 20,
            },

            center: {
                type: Boolean,
                default: false,
            },

            startPosition: {
                type: Number,
                default: 0,
            },
        },

        data() {
            return {
                scroll: 0,
                initialScroll: null,
                clientWidth: 1,
                transitionTimer: null,
                transitioningTo: null,
            };
        },

        computed: {
            /**
             * The width of an individual item, including margins
             *
             * @returns {Number}
             */
            itemWidth() {
                return this.clientWidth / this.numberInView;
            },

            /**
             * The width of all possible items together
             *
             * @returns {Number}
             */
            totalWidth() {
                return this.itemWidth * this.itemCount;
            },

            rawIndex: {
                /**
                 * The unrounded index based on the scroll
                 *
                 * @returns {Number}
                 */
                get() {
                    return this.itemCount * (this.itemScroll / this.totalWidth);
                },

                /**
                 * Transition to the set index
                 *
                 * @param {Number} value
                 */
                set(value) {
                    this.transitionIndex(value);
                },
            },

            index: {
                /**
                 * The index calculated by the current scroll
                 *
                 * @returns {Number}
                 */
                get() {
                    return ((Math.ceil(this.rawIndex) % this.itemCount) + this.itemCount) % this.itemCount;
                },

                /**
                 * Set the rawIndex to the nearest value matching index
                 *
                 * @param {Number} value
                 */
                set(value) {
                    this.rawIndex = value + (Math.floor(this.rawIndex / this.itemCount) * this.itemCount);
                },
            },

            /**
             * Half of the margin width between items
             *
             * @returns {Number}
             */
            halfMargin() {
                return this.margin / 2;
            },

            /**
             * The number of items
             *
             * @returns {Number}
             */
            itemCount() {
                return this.items.length;
            },

            /**
             * Which items to render in the DOM
             *
             * @returns {Array<Object>}
             */
            itemsRendered() {
                const items = [];
                const padding = Math.ceil(this.numberInView / 2);
                const start = this.index - padding;
                const end = this.index + padding;

                for (let i = start; i <= end; i++) {
                    const index = this.getItemIndex(i);

                    items.push({
                        index: i,
                        item: this.items[index],
                    });
                }

                return items;
            },

            itemScroll: {
                /**
                 * Scroll adjusted for items
                 *
                 * @returns {Number}
                 */
                get() {
                    return -this.scroll;
                },

                /**
                 * Set the scroll based on the item scroll
                 *
                 * @param {Number} value
                 */
                set(value) {
                    this.scroll = -value;
                },
            },

            /**
             * Scroll adjusted for the translate
             *
             * @returns {Number}
             */
            translateScroll() {
                let scroll = ((this.scroll % this.itemWidth) + this.itemWidth) % this.itemWidth;

                if (this.center) {
                    scroll -= (this.clientWidth / 2) - (this.itemWidth / 2);
                }

                return scroll - this.itemWidth;
            },
        },

        async mounted() {
            await this.$nextTick();

            this.setClientWidth();

            if (!this.index) {
                this.index = this.startPosition;
            }
        },

        async updated() {
            await this.$nextTick();

            this.setClientWidth();
        },

        methods: {
            /**
             * Set the client width
             */
            setClientWidth() {
                this.clientWidth = this.$el && this.$el.getBoundingClientRect
                    ? this.$el.getBoundingClientRect().width
                    : 1;
            },

            /**
             * Move to a different index
             *
             * @param {Number} distance
             */
            move(distance) {
                this.index += Math.round(distance);
            },

            /**
             * Get an items modulus index
             *
             * @param {Number} index
             *
             * @returns {Number}
             */
            getItemIndex(index) {
                return ((index % this.itemCount) + this.itemCount) % this.itemCount;
            },

            /**
             * Sleep for a certain amount of time between the transition points
             *
             * @param {Number} timeout
             *
             * @returns {Promise<undefined>}
             */
            async animationSleep(timeout = this.animationStep) {
                return new Promise(resolve => {
                    this.clearTimeout(this.transitionTimer);

                    this.transitionTimer = this.setTimeout(resolve, timeout);
                });
            },

            /**
             * Transition smoothly to the index
             *
             * @param {Number} index
             */
            async transitionIndex(index) {
                // Stagger transitions on different parts of the page to make them smoother
                await this.animationSleep(Math.random() * this.animationStep);

                if (this.transitioningTo !== null) {
                    // Abruptly finish previous transition
                    this.itemScroll = this.transitioningTo;
                }

                this.transitioningTo = this.totalWidth * (index / this.itemCount);

                while (this.itemScroll !== this.transitioningTo) {
                    if (this.panning) {
                        break;
                    }

                    const distance = (this.transitioningTo - this.itemScroll) / 2;

                    if (Math.abs(distance) < 1) {
                        this.itemScroll = this.transitioningTo;
                        break;
                    }

                    this.itemScroll += distance > 0
                        ? Math.min(this.animationSpeed, distance)
                        : Math.max(-this.animationSpeed, distance);

                    await this.animationSleep();
                }

                this.transitioningTo = null;
                this.$emit('index', this.index);
            },

            /**
             * Handle panning starte
             */
            handlePanningStart() {
                this.initialScroll = this.scroll;
            },

            /**
             * Stop handling panning
             */
            handlePanningStop() {
                const closestIndex = Math.round(this.rawIndex);

                if (this.rawIndex !== closestIndex) {
                    this.rawIndex = closestIndex;
                }
            },

            /**
             * Handle panning update
             *
             * @param {Object} pan
             */
            handlePanning({ distance }) {
                this.scroll = this.initialScroll + distance;
            },
        },
    };
</script>

<style lang="scss">
    .efficient-carousel-container {
        box-sizing: border-box;

        .efficient-carousel {
            display: flex;
            width: 100%;
            box-sizing: border-box;

            .efficient-carousel-item {
                flex-shrink: 0;
                box-sizing: border-box;
            }
        }
    }
</style>
