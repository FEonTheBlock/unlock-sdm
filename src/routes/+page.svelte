<script>
	export let data;
	let { sdmPrices } = data;
	$: ({ sdmPrices } = data);
</script>

<ul>
	{#each sdmPrices as sdmPrice}
		<li>{sdmPrice.consulting_name}</li>
	{/each}
</ul>
