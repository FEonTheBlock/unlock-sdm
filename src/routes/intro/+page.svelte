<script>
	let isActive = false;
	const openDoor = () => {
		isActive = true;
	};
</script>

<div class="door_bg {isActive && 'active'}" on:click={openDoor} on:keypress={openDoor}>
	<h1>스드메의 문단속</h1>
</div>

<style>
	.door_bg {
		width: 100%;
		background: #000;
		height: 100vh;
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.door_bg:before,
	.door_bg:after {
		content: '';
		position: absolute;
		top: 0px;
		width: 50%;
		height: 100%;
		background: pink;
		transition: all 2s ease-in-out;
		z-index: 1;
	}
	.door_bg:before {
		left: 0px;
		transform-origin: left bottom;
	}
	.door_bg:after {
		right: 0px;
		transform-origin: right bottom;
	}
	.door_bg.active:before {
		transform: perspective(600px) scaleZ(0.5) rotateY(90deg);
	}
	.door_bg.active:after {
		transform: perspective(600px) scaleZ(0.5) rotateY(-90deg);
	}
	h1 {
		text-align: center;
		font-size: 40px;
		color: pink;
		margin: 0px auto;
	}
</style>
