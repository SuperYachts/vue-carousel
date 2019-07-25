<template functional>
    <div class="translate-scroll">
        <div
            :style="{
                transform: `translateX(${ props.value }px)`,
                transitionDuration: props.transitionDuration,
                transitionTimingFunction: props.transitionTimingFunction,
            }"
            @transitionend="listeners.transitionend"
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
                default: 'ease',
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
