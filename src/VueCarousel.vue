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
            :transition-duration="transitioning ? '0.5s' : '0s'"
            @transitionend="handleTransitionEnd"
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
    import GlobalEvents from 'vue-global-events';

    import TranslateScroll from './TranslateScroll';

    export default {
        name: 'efficient-carousel',

        components: {
            GlobalEvents,
            TranslateScroll,
        },

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
                translateScroll: 0,
                transitioning: false,
                clientWidth: 1,
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
                    this.itemScroll = this.totalWidth * (value / this.itemCount);
                    this.$emit('index', this.index);
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

        watch: {
            /**
             * Scroll adjusted for the translate
             */
            scroll(to, from) {
                this.runScrollTransition(to, from);
            },

            /**
             * Scroll adjusted for the translate
             */
            itemWidth() {
                this.translateScroll = this.getTranslateScroll();
            },
        },

        methods: {
            getTranslateScroll() {
                let scroll = ((Math.round(this.scroll) % this.itemWidth) + this.itemWidth) % this.itemWidth;

                if (this.center) {
                    scroll -= (this.clientWidth / 2) - (this.itemWidth / 2);
                }

                return scroll - this.itemWidth;
            },

            async runScrollTransition(rawFrom, rawTo) {
                const from = this.translateScroll;
                const to = this.getTranslateScroll();

                const startFrom = rawTo > rawFrom
                    ? to + this.itemWidth
                    : to - this.itemWidth;

                this.transitioning = false;
                this.translateScroll = startFrom;

                await this.$nextTick();

                this.transitioning = true;
                this.translateScroll = to;
            },

            handleTransitionEnd() {
                this.transitioning = false;
            },

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
