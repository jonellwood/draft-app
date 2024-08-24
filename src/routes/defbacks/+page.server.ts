import type { PageServerLoad } from './$types';
import { getDefBacks } from '$lib/server/db';

import { error } from '@sveltejs/kit';
export const load: PageServerLoad = (event) => {
	const defbacks = getDefBacks();
	if (!defbacks) {
		throw error(404, 'Not found');
	}

	return {
		defbacks
	};
};
