import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data: sdmInfos } = await supabase
		.from('sdm_infos')
		.select(
			'*,studio:studio_price_infos(*),dress:dress_price_infos(*),makeup:makeup_price_infos(*),consulting:consulting_price_infos(*)'
		);
	return {
		sdmInfos: sdmInfos ?? []
	};
}
