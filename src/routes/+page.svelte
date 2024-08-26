<script lang="ts">
	let { data: PageData } = $props();
	import { onMount } from 'svelte';
	async function updateStatus(id: number) {
		const response = await fetch('../api/update-status', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id })
		});
		if (response.ok) {
			// success
			window.location.reload();
		} else {
			// error
		}
	}
	async function updateTeam(id: number) {
		const response = await fetch('../api/update-team', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id })
		});
		if (response.ok) {
			// success
			window.location.reload();
		} else {
			// error
		}
	}
	async function updateAvailable(id: number) {
		const response = await fetch('../api/update-available', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id })
		});
		if (response.ok) {
			// success
			window.location.reload();
		} else {
			// error
		}
	}
	async function updateWifeTeam(id: number) {
		const response = await fetch('../api/update-wife-team', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ id })
		});
		if (response.ok) {
			// success
			window.location.reload();
		} else {
			// error
		}
	}

	let searchTerm: string = $state('');
	let filteredPlayers = $state(PageData.players);

	onMount(() => {
		filteredPlayers = PageData.players;
		//console.log(filteredPlayers);
	});

	$effect(() => {
		filteredPlayers = PageData.players.filter((player) => {
			console.log(searchTerm);
			return player.name.toLowerCase().includes(searchTerm.toLowerCase());
			// console.log(player.name.toLowerCase().includes(searchTerm.toLowerCase()));
		});
	});
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<div class="search-box">
	<input type="text" bind:value={searchTerm} placeholder="Search" />
</div>
<section>
	{#each filteredPlayers as player}
		<div class="player-card {player.status}" data-id={player.id}>
			<span class="top-card-row">
				<span class="badge-holder">
					<p class="badge {player.team}">{player.designation}</p>
					<p class="status-badge {player.status}">{player.status}</p>
				</span>
				<span class="name-holder">
					<p>{player.name} - {player.team} ({player.position})</p>
				</span>
			</span>
			<div>
				<div class="button-stack">
					<button onclick={() => updateTeam(player.id)}>Add to My Team</button>
					<button onclick={() => updateStatus(player.id)}>Mark Unavailable</button>
					<button onclick={() => updateAvailable(player.id)}>Mark Available</button>
					<button onclick={() => updateWifeTeam(player.id)}>Add to Wife Team</button>
				</div>
			</div>
		</div>
	{/each}
</section>

<style>
	section {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		gap: 25px;
	}
	.player-card {
		display: grid;
		grid-template-rows: 1fr;
		padding: 10px;
		border-radius: 5px;
		box-shadow: 0 0 20px -5px rgba(255, 255, 255, 0.8);
	}
	.available {
		background-color: white;
	}
	.search-box {
		line-height: 1.5;
		font-size: x-large;
		margin: 10px;
	}
	.top-card-row {
		display: grid;
		justify-content: space-around;
		align-content: center;
		align-items: center;
		grid-template-columns: 29% 69%;
	}
	.badge-holder {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		.myteam {
			background-color: #00008b70;
			color: #ffffff;
			border: 1px solid #00008b;
		}
		.wifeteam {
			background-color: #ff6ec770;
			color: #ffffff;
			border: 1px solid #00008b;
		}
	}
	.status-badge {
		margin-right: -320px;
		margin-top: -70px;
		transform: rotate(-16deg);
		text-transform: uppercase;
		font-weight: bold;
		color: #990000;
		letter-spacing: 1px;
		background-color: rgba(255, 0, 0, 0.5);
		padding: 2px 5px;
		border: 1px solid #990000;
		border-radius: 2px;
		box-shadow: 0 0 25px -5px #000000;
	}
	.name-holder {
		display: flex;
		justify-content: space-between;
		align-content: center;
		align-items: center;
		p {
			font-weight: bold;
			font-size: large;
		}
	}
</style>
