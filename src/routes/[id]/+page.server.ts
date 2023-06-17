import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	const { data } = await supabase.from('sdm-infos').select().eq('id', params.id).limit(1).single();

	console.log(data);

	return {
		consultingDate: data.consultingDate,
		weddingDate: data.weddingDate,
		studioInfo: data.studioInfo,
		dressInfo: data.dressInfo,
		makeUpInfo: data.makeUpInfo,
		consultingInfo: data.consultingInfo,
		totalPrice: data.totalPrice
	};
}
