<script>
	import { formatPrice } from '$utils/formatUtils';

	export let data;
	let { studioInfo, dressInfo, makeUpInfo, consultingInfo, totalPrice, consultingDate, weddingDate } = data;
	$: ({ studioInfo, dressInfo, makeUpInfo, consultingInfo, consultingDate, weddingDate } = data);
</script>

<div>
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
<dl>
	<div>
		<dt>드레스</dt>
		<dd>{dressInfo.name}</dd>
	</div>
	<div>
		<dt>비용</dt>
		<dd>{formatPrice(dressInfo.price)}</dd>
	</div>
	<div>
		<dt>비고</dt>
		<dd>{dressInfo.comment}</dd>
	</div>
</dl>
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

<style>
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