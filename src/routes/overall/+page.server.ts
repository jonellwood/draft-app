import type { PageServerLoad } from './$types';
import { getPlayers } from '../../lib/server/db';

import { error, redirect } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const players = getPlayers();
	if (!players) {
		throw error(404, 'Not found');
	}
	// console.log(players);

	return { players };
};
