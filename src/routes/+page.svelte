<script>
	import { tweened } from 'svelte/motion';
	import { linear as easing } from 'svelte/easing';

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
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<h1>Draft Countdown</h1>
	<div class="timer">
		<span>{days} d</span>
		<span class="separator">:</span>
		<span>{hours} h</span>
		<span class="separator">:</span>
		<span>{minutes} m</span>
		<span class="separator">:</span>
		<span>{seconds} s</span>
	</div>
</section>

<style>
	.timer {
		font-family: 'Courier New', monospace;
		font-size: 48px;
		font-weight: bold;
		text-align: center;

		color: #ffbf00;
		background-color: #000000; /* Black background */
		padding: 20px;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	}

	.timer span {
		margin: 0 10px;
	}

	.timer span.separator {
		font-size: 24px;
		margin: 0 5px;
	}
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.welcome {
		display: block;
		position: relative;
		width: 100%;
		height: 0;
		padding: 0 0 calc(100% * 495 / 2048) 0;
	}

	.welcome img {
		position: absolute;
		width: 100%;
		height: 100%;
		top: 0;
		display: block;
	}
</style>
