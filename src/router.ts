import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: '/',
			name: 'Home',
			component: () => import('@/pages/HomePage.vue')
		},
		{
			path: '/projects',
			name: 'Projects',
			component: () => import('@/pages/ProjectsPage.vue')
		},
		{
			path: '/experience',
			name: 'Experience',
			component: () => import('@/pages/ExperiencePage.vue')
		}
	]
})

export default router
