import type { PageServerLoad } from './$types';
import { getTightEnds } from '$lib/server/db';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const tightends = getTightEnds();
	if (!tightends) {
		throw error(404, 'Not found');
	}

	return { tightends };
};
