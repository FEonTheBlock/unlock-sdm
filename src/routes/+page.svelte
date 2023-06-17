<script>
	export let data;
	let { sdmInfos } = data;
	$: ({ sdmInfos } = data);
	import Card from '../components/Card.svelte';
	import Checkbox from '$components/Checkbox.svelte';
</script>

<Checkbox isChecked={true} filterName={'스튜디오'} themeColor={'green'} />
<Checkbox isChecked={true} filterName={'드레스'} themeColor={'blue'} />
<Checkbox isChecked={true} filterName={'메이크업'} themeColor={'purple'} />

<ul>
	{#each sdmInfos as sdmInfo}
		<li><Card {sdmInfo} /></li>
	{/each}
</ul>
