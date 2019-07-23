<template>
    <element-width
        :style="{
            width: `calc(100% + ${ margin }px)`,
            'margin-right': `-${ halfMargin }px`,
            'margin-left': `-${ halfMargin }px`,
        }"
        :class="{ panning }"
        v-model="clientWidth"
        class="efficient-carousel-container"
        @touchstart="startPanning"
        @touchend="stopPanning"
        @touchcancel="stopPanning"
        @touchmove="handlePanning"
        @mousedown="startPanning"
        @mouseleave="stopPanning"
        @mouseup="stopPanning"
        @mousemove="handlePanning"
    >
        <translate-scroll
            :value="translateScroll"
            :transition-duration="transitioning ? '0.5s' : '0s'"
            @transitionend="handleTransitionEnd"
        >
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
    </element-width>
</template>

<script>
    import TranslateScroll from './TranslateScroll';
    import ElementWidth from './ElementWidth';

    /**
     * Modulus between 0 and MAX, not -MAX and MAX
     *
     * @param {Number} a
     * @param {Number} b
     *
     * @returns {Number}
     */
    function modulus(a, b) {
        return ((a % b) + b) % b;
    }

    export default {
        name: 'vue-carousel',

        components: {
            ElementWidth,
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
                mousedown: false,
                panning: false,
                initialTouchPosition: null,
                initialScroll: null,
                goingToNearest: false,
            };
        },

        computed: {
            /**
             * The width of an individual item, including margins
             *
             * @returns {Number}
             */
            itemWidth() {
                return Math.round(this.clientWidth / this.numberInView);
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
                    return modulus(Math.ceil(this.rawIndex), this.itemCount);
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
                const start = this.index - 1;
                const end = this.index + this.numberInView;

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

        watch: {
            /**
             * Scroll adjusted for the translate
             *
             * @param {Number} to
             * @param {Number} from
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

        async mounted() {
            await this.$nextTick();

            if (!this.index) {
                this.index = this.startPosition;
            }
        },

        methods: {
            /**
             * Get scroll location for the translate
             *
             * @returns {Number}
             */
            getTranslateScroll() {
                let scroll = modulus(Math.round(this.scroll), this.itemWidth);

                if (this.center) {
                    scroll -= (this.clientWidth / 2) - (this.itemWidth / 2);
                }

                return scroll - this.itemWidth;
            },

            /**
             * Run the translate scroll CSS animation
             *
             * @param {Number} rawFrom
             * @param {Number} rawTo
             */
            async runScrollTransition(rawFrom, rawTo) {
                if (this.goingToNearest) {
                    return;
                }

                const to = this.getTranslateScroll();

                if (this.panning) {
                    this.translateScroll = to;
                    return;
                }

                const startFrom = rawTo > rawFrom
                    ? to + this.itemWidth
                    : to - this.itemWidth;

                this.transitioning = false;
                this.translateScroll = startFrom;

                await this.$nextTick();

                this.transitioning = true;
                this.translateScroll = to;
            },

            /**
             * Transition to the nearest index
             */
            async transitionToNearest() {
                if (this.index !== this.rawIndex) {
                    const oldRawIndex = this.rawIndex;

                    this.goingToNearest = true;
                    this.index = Math.round(this.getItemIndex(this.rawIndex));

                    if (oldRawIndex > this.rawIndex) {
                        this.translateScroll -= this.itemWidth;
                        await this.$nextTick();
                    }

                    this.transitioning = true;
                    this.translateScroll = this.getTranslateScroll();
                }
            },

            /**
             * Finish the CSS transition
             */
            handleTransitionEnd() {
                this.transitioning = false;
                this.goingToNearest = false;
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
                return modulus(index, this.itemCount);
            },

            /**
             * Start handling panning
             *
             * @param {Event} e
             */
            startPanning(e) {
                this.initialTouchPosition = e.clientX || e.touches[0].clientX;
                this.initialScroll = this.itemScroll;
                this.mousedown = true;
            },

            /**
             * Stop handling panning
             *
             * @param {Event} e
             */
            stopPanning(e) {
                if (!this.panning) {
                    return;
                }

                if (this.itemScroll !== this.initialScroll) {
                    e.preventDefault();
                }

                this.panning = false;
                this.mousedown = false;

                this.transitionToNearest();
            },

            /**
             * Move the scroll position based on the distance the touch event
             * moved
             *
             * @param {Event} event
             */
            handlePanning({ clientX, touches }) {
                if (!this.mousedown) {
                    return;
                }

                this.panning = true;
                this.transitioning = false;

                const currentTouchPosition = clientX || touches[0].clientX;
                const distance = currentTouchPosition - this.initialTouchPosition;
                this.itemScroll = this.initialScroll - distance;
            },
        },
    };
</script>

<style lang="scss">
    .efficient-carousel-container {
        box-sizing: border-box;

        &.panning {
            cursor: ew-resize;

            > * {
                pointer-events: none;
            }
        }

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
