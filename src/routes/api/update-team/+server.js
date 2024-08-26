import { updateStatusToMyTeam } from '$lib/server/db';
export async function POST({ request }) {
	const { id } = await request.json();
	await updateStatusToMyTeam(id);
	return new Response(null, { status: 200 });
}
