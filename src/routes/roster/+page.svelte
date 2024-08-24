<script lang="ts">
	import { onMount } from 'svelte';
	let { data: PageData } = $props();
	console.log(PageData.roster);
	let positions = [];

	function getPositionDiv(position: string) {
		const divs = document.querySelectorAll(`div:has(p:contains(${position}))`);
		return divs[0]; // return the first matching div
	}

	onMount(() => {
		PageData.roster.forEach((player) => {
			const position = player.position.replace(/\d+$/, '');
			const div = getPositionDiv(position);
			if (div) {
				div.innerHTML += `
          <div class="card ${player.status}">
            <span class="badge">${player.position}</span>
            <p>
              ${player.name} - ${player.team}
            </p>
          </div>
        `;
			}
		});
	});
</script>

<div class="container">
	{#each PageData.roster as player}
		<div class="card {player.status}">
			<span class="badge">{player.position}</span>
			<p>
				{player.name} - {player.team}
			</p>
		</div>
	{/each}
</div>

<div class="roster">
	<p>QB</p>
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
</div>

<style>
	.roster {
		background-color: #f0f0f050;
	}
</style>
