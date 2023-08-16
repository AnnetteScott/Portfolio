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
		</section>
		<section id="skills">
			<div>
				<SkillBlock title="Unreal" imgName="Unreal.svg"/>
				<SkillBlock title="C++" imgName="C++.svg"/>
				<SkillBlock title="C#" imgName="CSharp.svg"/>
				<SkillBlock title="Firebase" imgName="Firebase.svg"/>
				<SkillBlock title="Java" imgName="Java.svg"/>
				<SkillBlock title="GitHub" imgName="GitHub.svg"/>
				<SkillBlock title="SQL" imgName="MySQL.svg"/>
				<SkillBlock title="Python" imgName="Python.svg"/>
				<SkillBlock title="TypeScript" imgName="TypeScript.svg"/>
				<SkillBlock title="Vue" imgName="Vue.svg"/>
				<SkillBlock title="HTML" imgName="HTML.svg"/>
				<SkillBlock title="CSS" imgName="CSS.svg"/>
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
