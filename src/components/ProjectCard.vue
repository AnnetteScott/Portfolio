<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'ProjectCard',
	props: {
		name: {
			type: String,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		image: {
			type: String,
			default: ''
		},
		link: {
			type: String,
			default: ''
		},
		github: {
			type: String,
			default: ''
		},
	},
	methods: {

	},
})

</script>

<template>
	<div class="project_card" :href="link">
		<div class="top_section">
			<img :src="'src/assets/projects/' + image" :alt="image" v-if="image != ''">
			<img src="" alt="" v-if="image == ''">
			<h1>{{ name }}</h1>
			<a :href="github" v-if="github != ''">
				<img src="src/assets/logos/GitHub.svg" alt="GitHub Logo">
			</a>
			<a href="" v-if="github == ''"></a>
		</div>
		<p> {{ description }}</p>
		<a :href="link" v-if="link != ''" class="site_button">Go to site</a>
	</div>
</template>

<style scoped>
.project_card{
	border: 1px solid black;
	border-radius: 10px;
	width: 300px;
	padding: 0px 5px 10px;
	gap: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: black;
	cursor: default;
	user-select: none;
}

a {
	cursor: pointer;
	text-decoration: none;
	color: black;
}

.top_section {
	padding: 0px 5px;
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 20px;
}

.top_section > a {
	width: 30px;
}

.top_section > img{
	width: 35px;
}

.site_button {
	border: 1px solid black;
	padding: 0px 10px;
	border-radius: 10px;
}

.site_button:hover {
	background-color: #00000012;
}
</style>
