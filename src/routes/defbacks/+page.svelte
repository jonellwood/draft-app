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
	{#each PageData.defbacks as defback}
		<div class="card {defback.status}">
			<span class="badge">{defback.position}</span>
			<p>
				({defback.id}) {defback.name} - {defback.team}
			</p>
			<div class="button-stack">
				<button onclick={() => updateStatus(defback.name)}>🖕🏼</button>
				<button onclick={() => updateTeam(defback.name)}>👍🏼</button>
			</div>
		</div>
	{/each}
</div>
