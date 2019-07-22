<template>
    <div
        :class="{ panning }"
        class="translate-scroll"
        @touchstart="startPanning"
        @touchend="stopPanning"
        @touchcancel="stopPanning"
        @touchmove="handlePanning"
        @mousedown="startPanning"
        @mouseleave="stopPanning"
        @mouseup="stopPanning"
        @mousemove="handlePanning"
    >
        <global-events
            target="window"
            @resize="setClientWidth"
        />

        <div
            ref="scrollPosition"
            class="translate-scroll-position"
        >
            <slot />
        </div>
    </div>
</template>

<script>
    import VueSetTimeout from '@netsells/vue-set-timeout';
    import GlobalEvents from 'vue-global-events';

    export default {
        name: 'translate-scroll',

        components: {
            GlobalEvents,
        },

        mixins: [
            VueSetTimeout,
        ],

        props: {
            value: {
                type: Number,
                required: true,
            },
        },

        data() {
            return {
                mousedown: false,
                panning: false,
                initialTouchPosition: null,
                initialScroll: null,
                clientWidth: 1,
            };
        },

        computed: {
            /**
             * The translateX style
             *
             * @returns {Number}
             */
            translateX() {
                return `translateX(${ this.value }px)`;
            },
        },

        watch: {
            value: {
                immediate: true,
                /**
                 * Improve efficiency of site by updating the scroll position in
                 * raw JS instead of using Vue and having the virtual DOM diffed
                 * in N different places multiple times per second
                 */
                handler() {
                    if (!this.$refs.scrollPosition) {
                        return;
                    }

                    this.$refs.scrollPosition.style.setProperty('transform', this.translateX);
                },
            },
        },

        async mounted() {
            await this.$nextTick();

            this.setClientWidth();
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
                this.clientWidth = this.$el.getBoundingClientRect().width;
            },

            /**
             * Start handling panning
             *
             * @param {Event} e
             */
            startPanning(e) {
                this.initialTouchPosition = e.clientX || e.touches[0].clientX;
                this.initialScroll = this.value;
                this.mousedown = true;

                this.$emit('panning-start');
            },

            /**
             * Stop handling panning
             *
             * @param {Event} e
             */
            stopPanning(e) {
                if (this.value !== this.initialScroll) {
                    e.preventDefault();
                }

                this.panning = false;
                this.mousedown = false;

                this.$emit('panning-stop');
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

                const currentTouchPosition = clientX || touches[0].clientX;
                const distance = currentTouchPosition - this.initialTouchPosition;
                this.$emit('input', this.initialScroll + distance);
                this.$emit('panning', {
                    initialScroll: this.initialScroll,
                    distance,
                });
            },
        },
    };
</script>

<style lang="scss">
    .translate-scroll {
        overflow: hidden;
        display: flex;

        &.panning {
            cursor: ew-resize;

            > * {
                pointer-events: none;
            }
        }

        .translate-scroll-position {
            width: 100%;
            overflow: visible;
        }
    }
</style>
