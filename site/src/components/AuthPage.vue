<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function handleKeydown(event: KeyboardEvent) {
    event.stopPropagation();
    event.stopImmediatePropagation();

    if (event.key === 'f') {
        router.push({
            path: '/home',
        });
    }
}

onMounted(() => {
    window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown);
    document.body.style.overflow = '';
});
</script>

<template>
    <div class="auth-page-container" />
</template>

<style scoped>
.auth-page-container {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
    background: var(--ultra-blue);
}
</style>
