<script lang="ts">
	let { data: PageData } = $props();
	console.log(PageData);
</script>

<h1>Wife Roster</h1>

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

<style>
	.badge {
		background-color: #7fff6e;
		color: #000;
	}
</style>
