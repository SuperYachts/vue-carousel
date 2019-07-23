<template>
    <div
        class="element-width"
        v-on="$listeners"
    >
        <global-events
            target="window"
            @resize="setClientWidth"
        />
        <slot />
    </div>
</template>

<script>
    import GlobalEvents from 'vue-global-events';

    export default {
        name: 'element-width',

        components: {
            GlobalEvents,
        },

        props: {
            value: {
                type: Number,
                required: true,
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
             * Emit the client width
             */
            setClientWidth() {
                const clientWidth = this.$el && this.$el.getBoundingClientRect
                    ? Math.round(this.$el.getBoundingClientRect().width)
                    : 1;

                this.$emit('input', clientWidth);
            },
        },
    };
</script>
