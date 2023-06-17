<script lang="ts">
	export let isChecked: boolean = false;
	export let filterName: string = 'eeee';
	export let themeColor: string = 'blue';
</script>

<span>
	<input type="checkbox" id="box" checked={isChecked} />
	<label for="box" style="--theme-color: var(--primary-{themeColor})">
		{filterName}
		<div />
	</label>
</span>

<style>
	:root {
		--dur: 300ms;
	}

	input {
		position: relative;
		appearance: none;
	}
	input:checked + label div {
		background-color: var(--theme-color);
	}
	input:checked + label div::before {
		translate: -240% -20%;
		rotate: -45deg;
	}
	input:checked + label div::after {
		rotate: 45deg;
	}
	input:checked + label div::after,
	input:checked + label div::before {
		animation: scale-rev var(--dur) 1 ease-in-out both;
		background-color: #ffffff;
	}
	label {
		position: relative;
		user-select: none;
		font-weight: bold;
		color: var(--main-text-color);
		transition-duration: var(--dur);
		cursor: pointer;
	}

	label div {
		position: absolute;
		right: 100%;
		top: 50%;
		transform: translateY(-50%);
		width: 30px;
		aspect-ratio: 1/1;
		border: 2px solid white;
		background-color: white;
		border-radius: 2px;
		overflow: hidden;
		transition-duration: var(--dur);
	}
	label div::after,
	label div::before {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		width: 2px;
		background-color: var(--light-gray);
		animation: scale var(--dur) 1 ease-in-out calc(var(--dur) * 1.3) both;
		transition-duration: var(--dur);
		transition-delay: var(--dur);
	}
	label div::after {
		rotate: 90deg;
		height: 12px;
		translate: 35% -50%;
	}
	label div::before {
		rotate: -90deg;
		translate: -35% -50%;
		height: 6px;
	}

	@keyframes scale {
		to {
			scale: 40;
		}
	}

	@keyframes scale-rev {
		from {
			scale: 40;
		}
		to {
			scale: 1;
		}
	}
</style>
