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
	{#each PageData.tightends as tightend}
		<div class="card {tightend.status}">
			<span class="badge">{tightend.position}</span>
			<p>
				({tightend.id}) {tightend.name} - {tightend.team}
			</p>
			<div class="button-stack">
				<button onclick={() => updateStatus(tightend.name)}>🖕🏼</button>
				<button onclick={() => updateTeam(tightend.name)}>👍🏼</button>
			</div>
		</div>
	{/each}
</div>

<!-- bind:checked={tightend.status === 'keeper'} -->
