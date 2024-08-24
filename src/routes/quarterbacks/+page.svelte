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
	{#each PageData.quarterbacks as quarterback}
		<div class="card {quarterback.status}">
			<span class="badge">{quarterback.position}</span>
			<p>({quarterback.id}) {quarterback.name} - {quarterback.team}</p>
			<div class="button-stack">
				<button onclick={() => updateStatus(quarterback.name)}>🖕🏼</button>
				<button onclick={() => updateTeam(quarterback.name)}>👍🏼</button>
			</div>
		</div>
	{/each}
</div>

<!-- bind:checked={quarterback.status === 'keeper'} -->
