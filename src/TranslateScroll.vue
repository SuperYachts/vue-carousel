<template>
    <div class="translate-scroll">
        <div
            :style="{
                transform: translateX,
                transitionDuration,
                transitionTimingFunction,
            }"
            class="translate-scroll-position"
        >
            <slot />
        </div>
    </div>
</template>

<script>
    export default {
        name: 'translate-scroll',

        props: {
            value: {
                type: Number,
                required: true,
            },

            transitionDuration: {
                type: String,
                default: '0s',
            },

            transitionTimingFunction: {
                type: String,
                default: 'linear',
            },
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
    };
</script>

<style lang="scss">
    .translate-scroll {
        overflow: hidden;
        display: flex;

        .translate-scroll-position {
            width: 100%;
            overflow: visible;
            transition-property: transform;
        }
    }
</style>
