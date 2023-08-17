<script lang="ts">
import IntroSection from '@/pages/IntroSection.vue';
import SkillSection from '@/pages/SkillSection.vue';
import ProjectSection from '@/pages/ProjectSection.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HomePage',
	components: { IntroSection, SkillSection, ProjectSection }
})

</script>

<template>
	<main>
		<IntroSection />
		<ProjectSection />
		<SkillSection />
	</main>
</template>

<style>
section {
	min-height: 60%;
}

h1 {
	font-size: 3rem;
}
</style>
