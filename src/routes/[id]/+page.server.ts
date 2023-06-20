import { supabase } from '$lib/supabaseClient';

export async function load({ params }) {
	const { data } = await supabase.from('sdm_infos').select().eq('id', params.id).limit(1).single();

	return {
		consultingDate: data?.consulting_date,
		weddingDate: data?.wedding_date,
		studioInfo: data?.studioInfo,
		dressInfo: data?.dressInfo,
		makeUpInfo: data?.makeUpInfo,
		consultingInfo: data?.consultingInfo,
		totalPrice: data?.totalPrice
	};
}
