<script>
	import { createEventDispatcher, onDestroy } from 'svelte';
	import { tweened } from 'svelte/motion';
	import { linear as easing } from 'svelte/easing';
	import { fly } from 'svelte/transition';

	let countdownDate = new Date('2024-08-24T14:00:00');
	let days = 0;
	let hours = 0;
	let minutes = 0;
	let seconds = 0;

	function updateCountdown() {
		const now = new Date();
		const diff = countdownDate.getTime() - now.getTime();

		if (diff <= 0) {
			// countown is over clown
			days = 0;
			hours = 0;
			minutes = 0;
			seconds = 0;
		} else {
			days = Math.floor(diff / (1000 * 60 * 60 * 24));
			hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
			seconds = Math.floor((diff % (1000 * 60)) / 1000);
		}
	}
	updateCountdown();
	setInterval(updateCountdown, 1000);

	let now = Date.now();
	let end = now + countdown * 1000;

	$: count = Math.round((end - now) / 1000);
	$: h = Math.floor(count / 3600);
	$: m = Math.floor((count - h * 3600) / 60);
	$: s = count - h * 3600 - m * 60;

	function updateTimer() {
		now = Date.now();
	}

	let interval = setInterval(updateTimer, 1000);
	$: if (count === 0) clearInterval(interval);

	let isPaused;
	let isResetting;
	const duration = 1000;

	let offset = tweened(1, { duration, easing });
	let rotation = tweened(360, { duration, easing });

	$: offset.set(Math.max(count - 1, 0) / countdown);
	$: rotation.set((Math.max(count - 1, 0) / countdown) * 360);

	function handleNew() {
		clearInterval(interval);
		dispatch('new');
	}

	function handleStart() {
		now = Date.now();
		end = now + count * 1000;
		interval = setInterval(updateTimer, 1000);
		offset.set(Math.max(count - 1, 0) / countdown);
		rotation.set((Math.max(count - 1, 0) / countdown) * 360);
		isPaused = false;
	}

	function handlePause() {
		offset.set(count / countdown);
		rotation.set((count / countdown) * 360);
		clearInterval(interval);
		isPaused = true;
	}

	function handleReset() {
		clearInterval(interval);
		isResetting = true;
		isPaused = false;
		Promise.all([offset.set(1), rotation.set(360)]).then(() => {
			isResetting = false;
			now = Date.now();
			end = now + countdown * 1000;
			interval = setInterval(updateTimer, 1000);
		});
	}

	function padValue(value, length = 2, char = '0') {
		const { length: currentLength } = value.toString();
		if (currentLength >= length) return value.toString();
		return `${char.repeat(length - currentLength)}${value}`;
	}

	onDestroy(() => {
		clearInterval(interval);
	});
</script>

<main>
	<svg in:fly={{ y: -5 }} viewBox="-50 -50 100 100" width="250" height="250">
		<title>Remaining seconds: {count}</title>
		<g fill="none" stroke="currentColor" stroke-width="2">
			<circle stroke="currentColor" r="46" />
			<path
				stroke="hsl(208, 100%, 50%)"
				d="M 0 -46 a 46 46 0 0 0 0 92 46 46 0 0 0 0 -92"
				pathLength="1"
				stroke-dasharray="1"
				stroke-dashoffset={$offset}
			/>
		</g>
		<g fill="hsl(208, 100%, 50%)" stroke="none">
			<g transform="rotate({$rotation})">
				<g transform="translate(0 -46)">
					<circle r="4" />
				</g>
			</g>
		</g>

		<g fill="currentColor" text-anchor="middle" dominant-baseline="baseline" font-size="13">
			<text x="-3" y="6.5">
				{#each Object.entries({ h, m, s }) as [key, value], i}
					{#if countdown >= 60 ** (2 - i)}
						<tspan dx="3" font-weight="bold">{padValue(value)}</tspan><tspan dx="0.5" font-size="7"
							>{key}</tspan
						>
					{/if}
				{/each}
			</text>
		</g>
	</svg>

	<div in:fly={{ y: -10, delay: 120 }}>
		<button on:click={handleNew}>New timer</button>

		{#if isPaused}
			<button disabled={isResetting || count === 0} on:click={handleStart}>
				<span class="visually-hidden">Start timer</span>

				<svg viewBox="-50 -50 100 100" width="30" height="30">
					<g
						fill="none"
						stroke="currentColor"
						stroke-width="20"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M -25 -40 l 60 40 -60 40z" />
					</g>
				</svg>
			</button>
		{:else}
			<button disabled={isResetting || count === 0} on:click={handlePause}>
				<span class="visually-hidden">Pause timer</span>
				<svg viewBox="-50 -50 100 100" width="30" height="30">
					<g
						fill="none"
						stroke="currentColor"
						stroke-width="20"
						stroke-linecap="round"
						stroke-linejoin="round"
					>
						<path d="M -25 -30 v 60 m 50 0 v -60" />
					</g>
				</svg>
			</button>
		{/if}

		<button on:click={handleReset}>Reset timer</button>
	</div>
</main>

<style>
	main {
		padding: 0rem 1rem;
	}

	main > svg {
		width: 100%;
		height: auto;
		display: block;
		margin: 0 auto 2rem;
	}

	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	@supports (display: grid) {
		div {
			display: grid;
			grid-template-columns: repeat(3, minmax(0, 1fr));
			justify-content: initial;
			justify-items: center;
		}
	}

	button:nth-of-type(odd) {
		width: max-content;
		font-size: 0.9rem;
		color: inherit;
		border: none;
		background: none;
		text-transform: capitalize;
	}

	button:nth-of-type(odd):hover {
		text-decoration: underline;
	}

	button:nth-of-type(2) {
		color: inherit;
		width: 3rem;
		height: 3rem;
		border-radius: 50%;
		border: none;
		padding: 1rem;
		background: hsl(208, 100%, 50%);
		box-shadow: 0px 1px 2px hsl(208, 100%, 50%);
		transition:
			box-shadow 0.2s ease-in-out,
			transform 0.25s ease-in-out;
	}

	button:nth-of-type(2):hover,
	button:nth-of-type(2):focus {
		box-shadow: 0px 1px 5px hsl(208, 100%, 50%);
	}

	button:nth-of-type(2) svg {
		margin: initial;
		width: 100%;
		height: auto;
		display: block;
	}

	button[disabled] {
		transform: scale(0);
	}
</style>
