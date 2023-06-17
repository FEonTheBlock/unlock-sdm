<script>
	export let data;
	let { sdmInfos } = data;
	$: ({ sdmInfos } = data);
	import Card from '../components/Card.svelte';
</script>

<ul>
	{#each sdmInfos as sdmInfo}
		<li><Card {sdmInfo} /></li>
	{/each}
</ul>
