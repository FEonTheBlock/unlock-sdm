<script>
	import { formatDateToYM, formatPrice } from '$utils/formatUtils';
	import Badge from './Badge.svelte';
	export let sdmInfo;
	let { id, consultingDate, weddingDate, studioInfo, dressInfo, makeUpInfo, totalPrice } = sdmInfo;
	let badgeTypes = [studioInfo, dressInfo, makeUpInfo]
		.filter((info) => info != null)
		.map(({ type }) => type);
</script>

<a href={`/${id}`}>
	<div class="header">
		<span>견적일 {new Date(consultingDate).toLocaleDateString('ko-KR')}</span>
		<div>
			{#each badgeTypes as badgeType}
				<Badge {badgeType} />
			{/each}
		</div>
	</div>
	<div class="price">{formatPrice(totalPrice)}</div>
	<div class="wedding-date">{formatDateToYM(new Date(weddingDate))} 결혼</div>
</a>

<style>
	a {
		display: block;
		margin: 8px;
		padding: 16px 12px;
		background: #fff;
		box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
	}
	.header {
		display: flex;
		justify-content: space-between;
		align-items: start;
		color: var(--main-text-color);
		font-size: 16px;
	}
	.price {
		font-size: 32px;
		font-weight: 700;
		text-align: end;
		color: var(--main-text-color);
	}
	.wedding-date {
		font-size: 12px;
		color: var(--sub-text-color);
	}
</style>
