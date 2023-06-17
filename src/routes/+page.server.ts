import { supabase } from '$lib/supabaseClient';

export async function load() {
	const { data } = await supabase.from('sdm-infos').select();
	return {
		sdmInfos: data ?? []
	};
}
