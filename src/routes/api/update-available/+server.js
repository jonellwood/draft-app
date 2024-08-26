import { updateStatusToAvailable } from '$lib/server/db';

export async function POST({ request }) {
	const { id } = await request.json();
	await updateStatusToAvailable(id);
	return new Response(null, { status: 200 });
}
