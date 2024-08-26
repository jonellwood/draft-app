<script lang="ts">
	let { data: PageData } = $props();
</script>

<h1>CAS Roster</h1>

<div class="container">
	{#each PageData.players as player}
		<div class="card {player.status}">
			<span class="badge">{player.position}</span>
			<p>
				({player.id}) {player.name} - {player.team}
			</p>
			<div class="button-stack">
				<!-- <button onclick={() => updateStatus(player.name)}>🖕🏼</button>
				<button onclick={() => updateTeam(player.name)}>👍🏼</button> -->
			</div>
		</div>
	{/each}
</div>
