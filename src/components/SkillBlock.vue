<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'SkillBlock',
	props: {
		title: {
			type: String,
			required: true
		},
		logo: {
			type: String,
			required: true
		}
	},
	computed: {
		image(){
			return new URL(`../assets/logos/${this.logo}`, import.meta.url).href;
		}
	},
})

</script>

<template>
	<div class="skill_block">
		<img :src="image" :alt="title + ' logo'">
		<p>{{ title }}</p>
	</div>
</template>

<style scoped>
.skill_block{
	width: 145px;
	height: 60px;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: flex-start;
	border: 1px solid black;
	border-radius: 10px;
}

p{
	margin-left: 5px;
	font-size: 15px;
	white-space: nowrap;
}

img{
	border-radius: 14px;
	display: inline-block;
	padding: 7px;
	height: 60px;
	width: 60px;
}


@media only screen and (min-width: 768px) {
	.skill_block {
		width: 250px;
		height: 120px;
	}

	img {
		height: 120px;
		width: 120px;
		padding: 15px;
	}

	p{
		margin: 0;
		font-size: 18px;
		white-space: nowrap;
	}
}
</style>
