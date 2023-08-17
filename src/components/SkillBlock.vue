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
			return new URL('src/assets/logos/' + this.logo, import.meta.url).href;
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
	width: 55px;
    height: 110px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
}

p{
	font-size: 15px;
	white-space: nowrap;
}

img{
	border: 2px solid #000;
    border-radius: 14px;
    display: inline-block;
    padding: 7px;
    height: 65px;
    width: 65px;
}


@media only screen and (min-width: 768px) {
	.skill_block {
		width: 150px;
		height: 170px;
	}

	img {
		height: 120px;
		width: 120px;
		padding: 15px;
	}

	p{
		margin: 0;
		font-size: 1.5rem;
		white-space: nowrap;
	}
}
</style>
