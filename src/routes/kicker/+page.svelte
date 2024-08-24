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
	{#each PageData.players as kicker}
		<div class="card {kicker.status}">
			<span class="badge">{kicker.position}</span>
			<p>
				({kicker.id}) {kicker.name} - {kicker.team}
			</p>
			<div class="button-stack">
				<button onclick={() => updateStatus(kicker.name)}>🖕🏼</button>
				<button onclick={() => updateTeam(kicker.name)}>👍🏼</button>
			</div>
		</div>
	{/each}
</div>
