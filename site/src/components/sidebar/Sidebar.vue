<script setup lang="ts">
import SidebarEntry from './SidebarEntry.vue';
import SettingsModal from './SettingsModal.vue';

import { useRoute } from 'vue-router';
const route = useRoute();
</script>

<template>
    <div v-if="route.path !== '/'" class="sidebar-container">
        <h2 class="sidebar-header">MyDash Sidebar</h2>
        <hr class="sidebar-separator" />
        <div class="sidebar-entries-container">
            <span class="sidebar-group" />AuthPage
            <SidebarEntry title="Home" route="home" />
            <SidebarEntry title="Journal" route="journal" />
            <SidebarEntry title="Tasks" route="tasks" />
            <SidebarEntry title="Goals" route="goals" />
            <SidebarEntry title="Calendar" route="calendar" />
        </div>
        <SettingsModal />
    </div>
</template>

<style scoped>
.sidebar-container {
    display: flex;
    flex-direction: column;
    max-height: 100%;
    width: 20rem;
    background: var(--muted-blue);
    padding: 1.5rem;
    margin: 1rem 0;
    border-radius: 0 var(--page-border-radius) var(--page-border-radius) 0;
    border-top: 1px solid var(--ultra-blue);
    border-right: 1px solid var(--ultra-blue);
    border-bottom: 1px solid var(--ultra-blue);
}
.sidebar-entries-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
}
.sidebar-header {
    color: var(--standard-white);
    font-size: 1rem;
    margin: 0;
}
.sidebar-separator {
    width: 100%;
    border: none;
    border-bottom: 1px solid #333853;
    margin: 1rem 0;
}
</style>
