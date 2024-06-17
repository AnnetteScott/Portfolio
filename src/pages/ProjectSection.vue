<script lang="ts">
import { defineComponent } from 'vue';
import ProjectCard from '@/components/ProjectCard.vue';

export default defineComponent({
	name: 'ProjectSection',
	components: { ProjectCard },
	methods: {

	},
})

</script>

<template>
	<section id="projects">
			<h2>Projects</h2>
			<div id="project_inner">
				<ProjectCard name="Spirecrest" 
					description="A 3D FPS, Dungeon crawler where you play as a wizard trying to escape a tower."
					:tools="['Unreal', 'C++']"
				/>
				<ProjectCard name="Mage Tower" 
					description="A 2D pixel art puzzle platformer where you play as a wizard trying to escape a tower." 
					link="https://github.com/AnnetteScott/Mage-Tower"
					:tools="['Unity', 'CSharp']"
				/>
				<ProjectCard name="Super Tic Tac Toe" 
					description="An expansion on the classic Tic Tac Toe game with a grid of 9 smaller boards." 
					link="https://github.com/AnnetteScott/super-tic-tac-toe"
					:tools="['Vue', 'TypeScript']"
					/>
					<ProjectCard name="Product Scanner" 
					description="An embedded script that runs on a Raspberry Pi Pico for scanning grocery items." 
					link="https://github.com/AnnetteScott/super-tic-tac-toe"
					:tools="['C++']"
					/>
					<ProjectCard name="HexaChess" 
					description="Hexagonal Chess in the web browser" 
					link="https://hexachess.notnatural.dev/" 
					github="https://github.com/NotNatural21/HexaChess"
					:tools="['Vue', 'TypeScript']"
					/>
					<ProjectCard name="Battleship" 
					description="Java GUI Battleship game for a university course"
					link="https://github.com/AnnetteScott/Battleships"
					:tools="['Java']"
				/>
			</div>
		</section>
</template>

<style scoped>
#projects {
	display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    justify-content: flex-start;
    gap: 40px;
}

#project_inner {
	width: max(90%, 320px);
    height: 100%;
	gap: 50px;
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
	justify-content: center;
}
</style>
