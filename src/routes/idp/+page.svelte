<script lang="ts">
	let { data: PageData } = $props();
	async function updateStatus(name: string) {
		const response = await fetch('../api/update-status', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name })
		});
		if (response.ok) {
			// success
		} else {
			// error
		}
	}
	async function updateTeam(name: string) {
		const response = await fetch('../api/update-team', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ name })
		});
		if (response.ok) {
			// success
		} else {
			// error
		}
	}
</script>

<div class="container">
	{#each PageData.players as player}
		<div class="card {player.status}">
			<span class="badge">{player.position}</span>
			<p>
				({player.id}) {player.name} - {player.team}
			</p>
			<div class="button-stack">
				<button onclick={() => updateStatus(player.name)}>🖕🏼</button>
				<button onclick={() => updateTeam(player.name)}>👍🏼</button>
			</div>
		</div>
	{/each}
</div>
