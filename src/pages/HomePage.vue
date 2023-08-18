<script lang="ts">
import IntroSection from '@/pages/IntroSection.vue';
import SkillSection from '@/pages/SkillSection.vue';
import ProjectSection from '@/pages/ProjectSection.vue';
import ContactSection from '@/pages/ContactSection.vue';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HomePage',
	components: { IntroSection, 
		SkillSection, 
		ContactSection, 
		ProjectSection
	}
})

</script>

<template>
	<main>
		<IntroSection />
		<ProjectSection />
		<SkillSection />
		<ContactSection />
		<div id="bottom_container">
		</div>
	</main>
</template>

<style>
section {
	min-height: 60%;
	padding-bottom: 50px;
}

h1 {
	font-size: 3rem;
}

a{
	text-decoration: none;
	color: black;
}

#bottom_container{
	height: 30vw;
	overflow: hidden;
	background-image: url('../assets/background.svg');
	background-size: cover;
	background-position: bottom;
	transform: rotate(180deg);
}
</style>
