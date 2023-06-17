<div class="layout">
	<main>
		<slot />
	</main>
</div>

<style>
	@import '$styles/reset';
	@import '$styles/font';
	@import '$styles/color';

	main {
		max-width: 375px;
		height: 100vh;
		margin: 0 auto;
		background-color: beige;
	}
</style>
