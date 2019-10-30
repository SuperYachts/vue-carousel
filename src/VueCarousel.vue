<template>
    <element-width
        :style="{
            width: `calc(100% + ${ margin }px)`,
            'margin-right': `-${ surroundMargin }px`,
            'margin-left': `-${ surroundMargin }px`,
        }"
        :class="{ panning }"
        v-model="clientWidth"
        class="efficient-carousel-container"
        @touchstart="startPanning"
        @touchend="stopPanning"
        @touchcancel="stopPanning"
        @touchmove="handlePanning"
        @mousedown.prevent="startPanning"
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
                    <slot
                        v-if="isValidIndex(index)"
                        :item="item"
                        :index="index"
                    />
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

            value: {
                type: Number,
                default: 0,
            },

            panningMinimumX: {
                type: Number,
                default: 8,
            },

            panningMaximumY: {
                type: Number,
                default: 200,
            },

            panningRatio: {
                type: Number,
                default: 2,
            },

            marginError: {
                type: Number,
                default: 0,
            },

            wrap: {
                type: Boolean,
                default: true,
            },
        },

        data() {
            return {
                scroll: 0,
                translateScroll: 0,
                transitioning: false,
                clientWidth: 1,
                panning: false,
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
             * Half margin but 1 pixel bigger to prevent accidental overlap
             *
             * @returns {Number}
             */
            surroundMargin() {
                return this.halfMargin - this.marginError;
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
             * Get start and end of render items
             *
             * @returns {{ start: Number, end: Number }}
             */
            startEnd() {
                const padding = 1;

                if (this.center) {
                    const centerPadding = padding + Math.ceil(this.numberInView / 2);
                    const start = this.index - centerPadding;
                    const end = this.index + centerPadding;

                    return { start, end };
                }

                const start = this.index - padding;
                const end = start + this.numberInView + padding;

                return { start, end };
            },

            /**
             * Which items to render in the DOM
             *
             * @returns {Array<Object>}
             */
            itemsRendered() {
                const items = [];
                const { start, end } = this.startEnd;

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

            /**
             * Change index based on value
             *
             * @param {Number} index
             */
            async value(index) {
                if (index < 0) {
                    return;
                }

                this.index = index;
            },
        },

        created() {
            this.goingToNearest = false;
            this.initialScroll = null;
            this.initialTouchPosition = null;
            this.mousedown = false;
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
                    scroll -= this.numberInView % 2 === 0
                        ? this.itemWidth / 2
                        : this.itemWidth;
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
                this.$emit('input', this.index);
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
             * Get the touch position of an event
             *
             * @param {Event} e
             *
             * @returns {Object}
             */
            getTouchPosition(e) {
                return {
                    x: e.clientX || e.touches[0].clientX,
                    y: e.clientY || e.touches[0].clientY,
                };
            },

            /**
             * Start handling panning
             *
             * @param {Event} e
             */
            startPanning(e) {
                this.initialTouchPosition = this.getTouchPosition(e);
                this.initialScroll = this.itemScroll;
                this.mousedown = true;
            },

            /**
             * Stop handling panning
             *
             * @param {Event} e
             */
            stopPanning(e) {
                this.mousedown = false;

                if (!this.panning) {
                    return;
                }

                if (this.itemScroll !== this.initialScroll) {
                    e.preventDefault();
                }

                this.panning = false;

                this.transitionToNearest();
            },

            /**
             * Check if an item index is valid
             *
             * @param {Number} index
             *
             * @returns {Boolean}
             */
            isValidIndex(index) {
                if (this.wrap) {
                    return true;
                }

                return index >= 0 && index < this.items.length;
            },

            /**
             * Move the scroll position based on the distance the touch event
             * moved
             *
             * @param {Event} e
             */
            handlePanning(e) {
                if (!this.mousedown) {
                    return;
                }

                const currentTouchPosition = this.getTouchPosition(e);
                let distanceX = currentTouchPosition.x - this.initialTouchPosition.x;

                if (!this.isValidIndex(this.rawIndex - 1)) {
                    distanceX = Math.min(0, distanceX);
                }

                if (!this.isValidIndex(this.rawIndex + 1)) {
                    distanceX = Math.max(0, distanceX);
                }

                if (!this.panning) {
                    const distanceXAbs = Math.abs(distanceX);
                    const distanceYAbs = Math.abs(currentTouchPosition.y - this.initialTouchPosition.y);

                    // Not enough movement overall
                    if (distanceXAbs < this.panningMinimumX) {
                        return;
                    }

                    // Too much vertical, must be trying to scroll
                    if (distanceYAbs > this.panningMaximumY) {
                        return;
                    }

                    // Not enough horizontal vs vertical movement
                    if (distanceXAbs < (distanceYAbs * this.panningRatio)) {
                        return;
                    }
                }

                this.panning = true;
                this.transitioning = false;
                this.itemScroll = this.initialScroll - distanceX;
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
