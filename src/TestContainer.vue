<template>
    <div class="test-container">
        <slot />
    </div>
</template>

<style lang="scss">
    .test-container {
        border: 1px solid blue;
        background: rgba(0, 0, 0, 0.1);
        max-width: 500px;
        padding: 10px;
    }
</style>
