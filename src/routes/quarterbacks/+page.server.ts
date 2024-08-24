import type { PageServerLoad } from './$types';
import { getQuarterbacks } from '$lib/server/db';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const quarterbacks = getQuarterbacks();
	if (!quarterbacks) {
		throw error(404, 'Not found');
	}
	// console.log(quarterbacks);
	return { quarterbacks };
};
