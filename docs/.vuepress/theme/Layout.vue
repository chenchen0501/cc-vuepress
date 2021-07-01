<template>
	<div class="theme-container">
		<div class="name">陈 大 事</div>
		<div class="solgo">相信奇迹的人,本身就是奇迹</div>
		<Content slot-key="main" />
	</div>
</template>
<style scoped>
.theme-container {
	background-image: url('../public/home.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	width: 100vw;
	height: 100vh;
}
.solgo {
	color: #fff;
	position: absolute;
	top: 50%;
	font-size: 35px;
	font-weight: bold;
	left: 50%;
	transform: translate(-50%, -50%);
}

.name {
	color: #fff;
	position: absolute;
	font-size: 23px;
	top: 0;
	left: 0;
	padding: 16px;
	font-weight: bold;
}
</style>
