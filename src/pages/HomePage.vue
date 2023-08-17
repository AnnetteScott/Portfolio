<script lang="ts">
import SkillBlock from '@/components/SkillBlock.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'HomePage',
    props: {},
    methods: {},
    components: { SkillBlock }
})

</script>

<template>
	<main>
		<section id="intro">
			<h1>Annette Scott</h1>
			<h2>Software Engineer</h2>
			<footer>
				<a href="https://github.com/NotNatural21">
					<img src="../assets/logos/GitHub.svg" alt="">
				</a>
				<a href="https://www.linkedin.com/in/annette-scott-61a31a236/">
					<img src="../assets/logos/LinkedIn.svg" alt="">
				</a>
			</footer>
		</section>
		<section id="skills">
			<div>
				<SkillBlock title="Unreal" logo="Unreal.svg"/>
				<SkillBlock title="C++" logo="C++.svg"/>
				<SkillBlock title="C#" logo="CSharp.svg"/>
				<SkillBlock title="Firebase" logo="Firebase.svg"/>
				<SkillBlock title="Java" logo="Java.svg"/>
				<SkillBlock title="GitHub" logo="GitHub.svg"/>
				<SkillBlock title="SQL" logo="MySQL.svg"/>
				<SkillBlock title="Python" logo="Python.svg"/>
				<SkillBlock title="TypeScript" logo="TypeScript.svg"/>
				<SkillBlock title="Vue" logo="Vue.svg"/>
				<SkillBlock title="HTML" logo="HTML.svg"/>
				<SkillBlock title="CSS" logo="CSS.svg"/>
			</div>
		</section>
	</main>
</template>

<style scoped>
section {
	height: 100%;
}
#intro{
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

#skills {
	display: flex;
    justify-content: center;
    align-items: center;
}

#skills > div {
	min-width: 300px;
	max-width: calc(4 * 170px);
	display: flex;
	flex-flow: row wrap;    
	justify-content: center;
	gap: 25px;
}
</style>
