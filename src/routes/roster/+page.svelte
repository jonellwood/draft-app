<script lang="ts">
	import { onMount } from 'svelte';
	let { data: PageData } = $props();
	console.log(PageData.roster);
	let positions = [];
	function removeIntegers(str: string) {
		return str.replace(/\d+/g, '').replace(/[^A-Z]+/g, '');
	}
</script>

<div class="container">
	{#each PageData.roster as player}
		<div class="card {player.status}">
			<span class="badge">{removeIntegers(player.position)}</span>
			<p>
				{player.player_name} - {player.team}
			</p>
		</div>
	{/each}
</div>

<!-- 
<div class="roster">
	<p>QB </p>
	<p>RB</p>
	<p>RB</p>
	<p>WR</p>
	<p>WR</p>
	<p>WR</p>
	<p>TE</p>
	<p>WRT</p>
	<p>WRT</p>
	<p>WR</p>
	<p>WT</p>
	<p>IDP</p>
	<p>IDP</p>
	<p>K</p>
	<p>DEF</p>
	<p>DL</p>
	<p>LB</p>
	<p>DB</p>
</div> -->

<style>
	.roster {
		background-color: #f0f0f050;
	}
</style>
