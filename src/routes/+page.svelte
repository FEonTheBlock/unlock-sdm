<script>
	export let data;
	let { sdmInfos } = data;
	$: ({ sdmInfos } = data);
</script>

<ul>
	{#each sdmInfos as sdmInfo}
		<li>{sdmInfo.dress_price}</li>
	{/each}
</ul>
