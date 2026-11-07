<script setup lang="ts">
import '@/styles/modal.css';

import { ref } from 'vue';
import Modal from '../Modal.vue';

const visible = ref(false);
</script>
<template>
    <button class="sidebar-bottom-container" @click="visible = true">Settings</button>
    <Modal :visible="visible" transition="fade" @close="visible = false">
        <div class="modal-content">
            <h2>Settings</h2>
        </div>
    </Modal>
</template>
<style scoped>
.updates-container {
    display: flex;
    flex-direction: column;
    padding-right: 1rem;
}
.sidebar-bottom-container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    width: 100%;
    color: var(--standard-white);
    background: var(--ultra-blue);
    border-radius: 0.5rem;
    text-decoration: none;
    padding: 0.75rem;
    font-size: 1.1rem;
    font-weight: 700;
    margin-top: auto;
    border: none;

    &:hover {
        cursor: pointer;
    }
}
</style>
