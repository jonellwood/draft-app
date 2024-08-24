// import { json } from 'body-parser';
import type { PageServerLoad } from './$types';
import { getLinebackers } from '$lib/server/db';

import { error } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const linebackers = getLinebackers();
	if (!linebackers) {
		throw error(404, 'Not found');
	}

	return {
		linebackers
	};
};
