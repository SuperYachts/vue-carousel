<template>
    <div class="test-item">
        <slot>
            Test Item
        </slot>
    </div>
</template>

<style lang="scss">
    .test-item {
        border: 1px solid black;
        background: white;
        min-height: 400px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>
