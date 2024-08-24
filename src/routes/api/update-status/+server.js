import { updateStatusToTaken } from '$lib/server/db';

export async function POST({ request }) {
	const { name } = await request.json();
	await updateStatusToTaken(name);
	return new Response(null, { status: 200 });
}
