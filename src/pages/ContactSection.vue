<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ContactSection',
	methods: {

	},
})

</script>

<template>
	<section id="contact">
		<h2>Contact Me</h2>
		<div>
			<a href="https://github.com/AnnetteScott">
				<img src="@/assets/logos/GitHub.svg" alt="">
				AnnetteScott
			</a>
			<a href="https://www.linkedin.com/in/annettescott">
				<img src="@/assets/logos/LinkedIn.svg" alt="">
				AnnetteScott
			</a>
			<a href="https://discordapp.com/users/745149549357563925">
				<img src="@/assets/logos/Discord.svg" alt="">
				notnatural1
			</a>
			<a href="mailto:gmt3870@autuni.ac.nz">
				<img src="@/assets/Mail.svg" alt="">
				gmt3870@autuni.ac.nz
			</a>
		</div>
	</section>
</template>

<style scoped>
#contact {
	display: flex;
    align-items: center;
    flex-direction: column;
    height: fit-content;
    justify-content: flex-start;
	gap: 40px;
	min-height: 100px;
}

#contact > div {
	width: max(90%, 320px);
	height: 100%;
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
	align-content: flex-start;
	gap: 25px;
}

a {
	display: flex;
    flex-direction: row;
    align-items: center;
	gap: 10px;
	border: 1px solid black;
	padding: 10px;
	border-radius: 10px;
	min-width: 275px;
}

img {
	width: 60px;
	height: 60px;
}

</style>
