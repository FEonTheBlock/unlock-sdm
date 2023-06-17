<script>
	import { formatPrice } from '$utils/formatUtils';

	export let data;
	let { studioInfo, dressInfo, makeUpInfo, consultingInfo, totalPrice, consultingDate, weddingDate } = data;
	$: ({ studioInfo, dressInfo, makeUpInfo, consultingInfo, consultingDate, weddingDate } = data);
</script>

<div class="price">
	{formatPrice(totalPrice)}
</div>
<dl>
	<div>
		<dt>상담/견적일</dt>
		<dd>{consultingDate}</dd>
	</div>
	<div>
		<dt>본식 날짜</dt>
		<dd>{weddingDate}</dd>
	</div>
</dl>
{#if studioInfo}
<dl>
	<div>
		<dt>스튜디오</dt>
		<dd>{studioInfo.name}</dd>
	</div>
	<div>
		<dt>비용</dt>
		<dd>{formatPrice(studioInfo.price)}</dd>
	</div>
	<div>
		<dt>비고</dt>
		<dd>{studioInfo.comment}</dd>
	</div>
</dl>
{/if}
{#if dressInfo}
<dl>
	{#each dressInfo.names as name, i}
	<div>
		{#if dressInfo.names.length > 2}
		<dt>드레스{i+1}</dt>
		{:else}
		<dt>드레스</dt>
		{/if}
		<dd>{name}</dd>
	</div>
	{/each}
	<div>
		<dt>비용</dt>
		<dd>{formatPrice(dressInfo.price)}</dd>
	</div>
	<div>
		<dt>비고</dt>
		<dd>{dressInfo.comment}</dd>
	</div>
</dl>
{/if}
{#if makeUpInfo}
<dl>
	<div>
		<dt>메이크업</dt>
		<dd>{makeUpInfo.name}</dd>
	</div>
	<div>
		<dt>비용</dt>
		<dd>{formatPrice(makeUpInfo.price)}</dd>
	</div>
	<div>
		<dt>비고</dt>
		<dd>{makeUpInfo.comment}</dd>
	</div>
</dl>
{/if}
{#if consultingInfo}
<dl>
	<div>
		<dt>플래너</dt>
		<dd>{consultingInfo.name}</dd>
	</div>
	<div>
		<dt>비용</dt>
		<dd>{formatPrice(consultingInfo.price)}</dd>
	</div>
	<div>
		<dt>비고</dt>
		<dd>{consultingInfo.comment}</dd>
	</div>
</dl>
{/if}

<style>
	.price{
		font-size: 32px;
    	font-weight: 700;
		text-align: end;
		color: var(--main-text-color);
	}

	dl > div{
		display: flex;
		justify-content: space-between;
	}
	
	dl:not(:last-child)::after{
		display: block;
		content: "";
		width: 90%;
		height: 1px;
		margin: 0 auto;
		border-bottom: 1px dashed var(--light-gray);
	}

	dt{
		font-weight: bold;
	}
</style>