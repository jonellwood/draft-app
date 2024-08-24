import type { PageServerLoad } from './$types';
import { getRunningBacks } from '$lib/server/db';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const runningbacks = getRunningBacks();
	if (!runningbacks) {
		throw error(404, 'Not found');
	}

	return { runningbacks };
};
