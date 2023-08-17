<script lang="ts">
import { defineComponent } from 'vue';
import SkillBlock from '@/components/SkillBlock.vue';

export default defineComponent({
	name: 'SkillSection',
	components: { SkillBlock },
	methods: {

	},
})

</script>

<template>
	<section id="intro">
		<h1>Annette Scott</h1>
		<ul>
			<li><span>Web</span> <span>Developer</span></li>
			<li><span>Software</span> <span>Developer</span></li>
			<li><span>Game</span> <span>Developer</span></li>
		</ul>
	</section>
</template>

<style scoped>
#intro{
	display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
	background-image: url('../assets/background.svg');
	background-size: cover;
	background-position: bottom;
	height: 100%;
}

#intro ul {
	position: relative;
	width: 18ch;
	margin: 0;
	padding: 0;
	font-size: 1.5rem;
	text-align: center;
	list-style: none;
}
#intro ul li {
	position: absolute;
	width: max-content;
}
#intro ul li span {
	display: inline-block;
}
#intro ul li span:nth-of-type(1) {
	width: 8ch;
	animation: introFlip 6s ease infinite;
}
#intro ul li:nth-of-type(3) span:nth-of-type(2),
#intro ul li:nth-of-type(2) span:nth-of-type(2) {
	color: transparent;
}
#intro ul li:nth-of-type(1) span:nth-of-type(1) {
	animation-delay: -4s;
}
#intro ul li:nth-of-type(2) span:nth-of-type(1) {
	animation-delay: -2s;
}

@keyframes introFlip {
	0%   { transform: rotateX(-90deg); }
	35%  { transform: rotateX(-90deg); }
	40%  { transform: rotateX(0deg); }
	60%  { transform: rotateX(0deg); }
	65%  { transform: rotateX(90deg); }
	100% { transform: rotateX(90deg); }
}
</style>
