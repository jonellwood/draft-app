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
	{#each PageData.runningbacks as runningback}
		<div class="card {runningback.status}">
			<span class="badge">{runningback.position}</span>
			<p>
				({runningback.id}) {runningback.name} - {runningback.team}
			</p>
			<div class="button-stack">
				<button onclick={() => updateStatus(runningback.name)}>🖕🏼</button>
				<button onclick={() => updateTeam(runningback.name)}>👍🏼</button>
			</div>
		</div>
	{/each}
</div>
