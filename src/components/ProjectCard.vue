<script lang="ts">
import { defineComponent, type PropType } from 'vue';

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
		tools: {
			type: Array as PropType<Array<string>>,
			default: []
		},
	},
	computed: {
		imageLogo(){
			return new URL('src/assets/projects/' + this.image, import.meta.url).href;
		},
		
	},
	methods: {
		imageTool(img: string){
			return new URL('src/assets/logos/' + img + '.svg', import.meta.url).href;
		}
	}
})

</script>

<template>
	<component :is="link ? 'a' : 'div'" class="project_card" :href="link">
		<div class="top_section">
			<img :src="imageLogo" :alt="image" v-if="image != ''">
			<img src="" alt="" v-if="image == ''">
			<h2>{{ name }}</h2>
			<a :href="github" v-if="github != ''">
				<img src="../assets/logos/GitHub.svg" alt="GitHub Logo">
			</a>
			<a href="" v-if="github == ''"></a>
		</div>
		<p> {{ description }}</p>
		<div class="tools">
			<img v-for="img of tools" :src="imageTool(img)" 
				:alt="img" class="tool_image" :title="img">
		</div>
	</component>
</template>

<style scoped>
.project_card{
	border: 1px solid black;
	border-radius: 10px;
	width: 300px;
	height: 200px;
	padding: 5px 10px 10px;
	gap: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	text-decoration: none;
	color: black;
	user-select: none;
}

a {
	cursor: pointer;
	text-decoration: none;
	color: black;
}

h2 {
	white-space: nowrap;
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

p {
	text-align: center;
	font-size: 1.1rem;
}

.tools{
	width: 100%;
	margin-top: auto;
	display: flex;
	align-items: center;
    flex-direction: row;
	gap: 10px;
}

.tool_image{
	width: 30px;
}
</style>
