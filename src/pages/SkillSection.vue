<script lang="ts">
import { defineComponent } from 'vue';
import SkillBlock from '@/components/SkillBlock.vue';

export default defineComponent({
	name: 'SkillSection',
	components: { SkillBlock },
	methods: {

	},
})

</script>

<template>
	<section id="skills">
		<h2>Skills</h2>
		<div>
			<SkillBlock title="Unreal Engine" logo="Unreal.svg"/>
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
</template>

<style scoped>
#skills {
	display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    justify-content: flex-start;
	gap: 40px;
}

#skills > div {
	width: max(90%, 320px);
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-content: flex-start;
	gap: 25px;
}
</style>
