<script setup lang="ts">
import { ref } from 'vue';
import HomePage from '@/pages/HomePage.vue'

let screenWidth = ref(window.innerWidth);
window.addEventListener('resize', function(event) {
    screenWidth.value = window.innerWidth;
}, true);
let minWidth = 660;
</script>

<template>
	<nav>
		<a href="/" class="nav_items">Home</a>
		<a href="#projects" class="nav_items">Projects</a>
		<a href="#skills" class="nav_items" v-if="screenWidth > minWidth">Skills</a>
		<a href="#skills" class="nav_items" v-if="screenWidth > minWidth">Experience</a>
		<a href="#skills" class="nav_items">Contact</a>

		<a href="https://github.com/NotNatural21" class="nav_items nav_github" style="margin-left: auto;" v-if="screenWidth > minWidth">
			<img src="./assets/logos/GitHub.svg" alt="">
		</a>
		<a href="https://www.linkedin.com/in/annette-scott-61a31a236/" class="nav_items nav_linkedin" v-if="screenWidth > minWidth">
			<img src="./assets/logos/LinkedIn.svg" alt="">
		</a>
	</nav>
	<HomePage />
</template>

<style>
@import url("./assets/main.css");
nav{
	width: 100%;
	height: 50px;
	min-height: 50px;
	padding: 0px 10px;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	align-items: center;
	position: sticky;
	top: 0;
	gap: 20px;
	background-color: white;
}

.nav_items {
	text-decoration: none;
	color: black;
	display: flex;
	font-size: 15px;
	padding: 0px 10px;
	border-radius: 20px;
}

@media only screen and (min-width: 768px) {
	.nav_items {
		font-size: 1.1rem;
	}
}

.nav_items:hover{
	background-color: #0000001e;
}

.nav_github > img {
	padding: 2px;
	height: 40px;
	aspect-ratio: 1.0208;
	margin-left: auto;
}
.nav_linkedin > img {
	padding: 2px;
	height: 40px;
}

p, h1, h2{
	margin: 0;
}
</style>
