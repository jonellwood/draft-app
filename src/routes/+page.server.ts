import type { PageServerLoad } from './$types';
import { getAllPlayers } from '$lib/server/db';
import { error } from '@sveltejs/kit';

export const load: PageServerLoad = (event) => {
	const players = getAllPlayers();
	if (!players) {
		throw error(404, 'Not found');
	}
	return { players };
};
