import '@fontsource-variable/inter';

import { createApp } from 'vue';
import { createWebHistory, createRouter } from 'vue-router';

import AuthPage from '@/components/AuthPage.vue';
import HomePage from '@/components/HomePage.vue';
import JournalPage from '@/components/JournalPage.vue';
import TasksPage from '@/components/TasksPage.vue';
import GoalsPage from '@/components/GoalsPage.vue';
import CalendarPage from '@/components/CalendarPage.vue';

import App from '@/App.vue';

const routes = [
    {
        path: '/',
        component: AuthPage,
    },
    {
        path: '/home',
        component: HomePage,
    },
    {
        path: '/journal',
        component: JournalPage,
    },
    {
        path: '/tasks',
        component: TasksPage,
    },
    {
        path: '/goals',
        component: GoalsPage,
    },
    {
        path: '/calendar',
        component: CalendarPage,
    },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior() {
        return { top: 0, behavior: 'smooth' };
    },
});

const app = createApp(App);
app.use(router);
app.mount('#app');
