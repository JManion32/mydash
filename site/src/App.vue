<script setup lang="ts">
import './styles/base.css';
import './styles/colors.css';
import './styles/scaling.css';
import './styles/theme.css';
import Sidebar from './components/sidebar/Sidebar.vue';
</script>

<template>
    <main>
        <div class="app-container">
            <Sidebar />
            <RouterView />
        </div>
    </main>
</template>

<style scoped>
.app-container {
    display: flex;
    flex-direction: row;
    height: 100%;
    width: 100%;
}
</style>
