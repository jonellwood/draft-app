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
	{#each PageData.players as receiver}
		<div class="card {receiver.status}">
			<span class="badge">{receiver.position}</span>
			<p>
				({receiver.id}) {receiver.name} - {receiver.team}
			</p>
			<div class="button-stack">
				<button onclick={() => updateStatus(receiver.name)}>🖕🏼</button>
				<button onclick={() => updateTeam(receiver.name)}>👍🏼</button>
			</div>
		</div>
	{/each}
</div>
