import { updateStatusToTaken } from '$lib/server/db';

export async function POST({ request }) {
	const { id } = await request.json();
	await updateStatusToTaken(id);
	return new Response(null, { status: 200 });
}
