<script lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ProjectsPage',
    components: { ProjectCard },
    props: {},
    methods: {},
})

</script>

<template>
	<main>
		<ProjectCard name="DashBooks" image="" description="Hello" link="https://dashbooks.app" github="https:"/>
	</main>
</template>

<style scoped>

</style>
