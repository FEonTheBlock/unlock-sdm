<script>
	export let badgeType;
</script>

<div class={badgeType} />

<style>
	div {
		display: inline-block;
		width: 16px;
		height: 16px;
		margin: 2px;
	}
	.studio {
		background-color: var(--primary-green);
	}
	.dress {
		background-color: var(--primary-blue);
	}
	.makeUp {
		background-color: var(--primary-purple);
	}
</style>
