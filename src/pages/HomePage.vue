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
				<SkillBlock title="Unreal" imgName="UE_Logo.svg"/>
				<SkillBlock title="C++" imgName="C++_Logo.svg"/>
				<SkillBlock title="C#" imgName="Csharp_Logo.png"/>
				<SkillBlock title="Firebase" imgName="Firebase_Logo_Logomark.svg"/>
				<SkillBlock title="Java" imgName="java-logo3.png"/>
				<SkillBlock title="GitHub" imgName="github-mark.svg"/>
				<SkillBlock title="SQL" imgName="logo-mysql-170x115.png"/>
				<SkillBlock title="Python" imgName="python-logo-only.svg"/>
				<SkillBlock title="TypeScript" imgName="ts-logo-128.svg"/>
				<SkillBlock title="Vue" imgName="Vue.js_Logo.svg"/>
				<SkillBlock title="HTML" imgName="HTML5_logo_and_wordmark.svg"/>
				<SkillBlock title="CSS" imgName="CSS3_logo_and_wordmark.svg"/>
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
