// import { json } from 'body-parser';
import type { PageServerLoad } from './$types';
import { getReceivers } from '$lib/server/db';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const players = getReceivers();
	if (!players) {
		throw error(404, 'Not found');
	}

	return {
		players
	};
};
