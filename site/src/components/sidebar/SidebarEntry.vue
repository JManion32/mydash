<script setup lang="ts">
const props = defineProps<{
    title: string;
    route: string;
}>();
</script>

<template>
    <RouterLink class="sidebar-entry-container" :to="props.route">
        {{ props.title }}
    </RouterLink>
</template>

<style scoped>
.sidebar-entry-container {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
    width: 100%;
    color: var(--standard-white);
    border-radius: 0.5rem;
    text-decoration: none;
    padding: 0.75rem;
    font-size: 1rem;
    font-weight: 700;
    transition: var(--site-transition);

    &:hover {
        cursor: pointer;
        background: var(--ultra-blue-hover);
    }
    &.router-link-exact-active {
        background: var(--ultra-blue);
    }
}
</style>
