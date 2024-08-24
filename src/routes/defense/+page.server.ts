import type { PageServerLoad } from './$types';
import { getDefense } from '$lib/server/db';

import { error } from '@sveltejs/kit';
export const load: PageServerLoad = (event) => {
	const players = getDefense();
	if (!players) {
		throw error(404, 'Not found');
	}

	return {
		players
	};
};
