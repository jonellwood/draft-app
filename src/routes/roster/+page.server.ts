import type { PageServerLoad } from './$types';
import { getRoster } from '$lib/server/db';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const roster = getRoster();
	if (!roster) {
		throw error(404, 'Not found');
	}
	return { roster };
};
