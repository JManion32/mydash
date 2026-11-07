<script setup lang="ts">
const props = defineProps<{
    title: string;
}>();
</script>

<template>
    <div class="page-container">
        <h1 class="site-title">
            {{ props.title }}
        </h1>
        <slot />
    </div>
</template>

<style scoped>
.page-container {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    margin: 1rem;
    border-radius: var(--page-border-radius);
    border: 1px solid var(--ultra-blue);
    background: var(--muted-blue);
    width: 100%;
    max-height: 100%;
}
.site-title {
    color: var(--standard-white);
}
</style>
