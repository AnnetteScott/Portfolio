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
		<div id="inner">
			<ProjectCard name="Warehouse Wreckage" 
				description="Simple game in Unreal Engine using Blueprints where you fire projectiles at destructible items"
				:tools="['Unreal']"
			/>
			<ProjectCard name="Battleship" 
				description="Java CUI Battleship game for a university course"
				:tools="['Java']"
			/>
			<ProjectCard name="DashBooks" image="DashBooks.svg" 
				description="Bookkeeping app" 
				link="https://dashbooks.app"
				:tools="['Firebase', 'Vue', 'TypeScript', 'Stripe']"
			/>
			<ProjectCard name="HexaChess" 
				description="Hexagonal Chess in the web browser" 
				link="https://hexachess.notnatural.dev/" 
				github="https://github.com/NotNatural21/HexaChess"
				:tools="['Vue', 'TypeScript']"
			/>
			<ProjectCard name="Grader" 
				description="Simple web app to help manage and view what your current grade is" 
				github="https://github.com/NotNatural21/Grader"
				:tools="['Firebase', 'Vue', 'TypeScript']"
			/>
			<ProjectCard name="Boxes" 
				description="Remake of the paper game 'Dots and boxes' in Ionic and Vue" 
				github="https://github.com/NotNatural21/Boxes"
				:tools="['Vue', 'TypeScript', 'Ionic']"
			/>
		</div>
	</main>
</template>

<style scoped>
main{
	display: flex;
    justify-content: center;
}

#inner {
	width: 90%;
    height: 100%;
    padding-top: 40px;
	gap: 50px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
	justify-content: center;
}
</style>
