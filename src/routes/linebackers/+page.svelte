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
	{#each PageData.linebackers as linebacker}
		<div class="card {linebacker.status}">
			<span class="badge">{linebacker.position}</span>
			<p>
				({linebacker.id}) {linebacker.name} - {linebacker.team}
			</p>
			<div class="button-stack">
				<button onclick={() => updateStatus(linebacker.name)}>🖕🏼</button>
				<button onclick={() => updateTeam(linebacker.name)}>👍🏼</button>
			</div>
		</div>
	{/each}
</div>
