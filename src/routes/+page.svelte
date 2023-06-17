<script>
	export let data;
	let { sdmInfos } = data;
	$: ({ sdmInfos } = data);
	import Card from '../components/Card.svelte';
	import Checkbox from '$components/Checkbox.svelte';

	const checkboxInfos = [
		{ name: '스튜디오', themeColor: 'green', id: 'checkbox1' },
		{ name: '드레스', themeColor: 'blue', id: 'checkbox2' },
		{ name: '메이크업', themeColor: 'purple', id: 'checkbox3' }
	];
</script>

{#each checkboxInfos as checkbox}
	<Checkbox
		isChecked={true}
		filterName={checkbox.name}
		themeColor={checkbox.themeColor}
		id={checkbox.id}
	/>
{/each}

<ul>
	{#each sdmInfos as sdmInfo}
		<li><Card {sdmInfo} /></li>
	{/each}
</ul>
