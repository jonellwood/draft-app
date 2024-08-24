<script>
	import { page } from '$app/stores';
	import logo from '$lib/images/svelte-logo.svg';
	import github from '$lib/images/github.svg';
</script>

<header>
	<div class="corner"></div>
	<nav>
		<ul>
			<li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
				<a href="/">Home</a>
			</li>
			<li aria-current={$page.url.pathname === '/overall' ? 'page' : undefined}>
				<a href="/overall">All</a>
			</li>
			<li aria-current={$page.url.pathname === '/quarterbacks' ? 'page' : undefined}>
				<a href="/quarterbacks">QB</a>
			</li>
			<li aria-current={$page.url.pathname === '/tightends' ? 'page' : undefined}>
				<a href="/tightends">TE</a>
			</li>
			<li aria-current={$page.url.pathname === '/runningbacks' ? 'page' : undefined}>
				<a href="/runningbacks">RB</a>
			</li>
			<li aria-current={$page.url.pathname === '/receivers' ? 'page' : undefined}>
				<a href="/receivers">WR</a>
			</li>
			<li aria-current={$page.url.pathname === '/defbacks' ? 'page' : undefined}>
				<a href="/defbacks">DB</a>
			</li>
			<li aria-current={$page.url.pathname === '/linebackers' ? 'page' : undefined}>
				<a href="/linebackers">LB</a>
			</li>
			<li aria-current={$page.url.pathname === '/deflinemen' ? 'page' : undefined}>
				<a href="/deflinemen">DL</a>
			</li>
			<li aria-current={$page.url.pathname === '/IDP' ? 'page' : undefined}>
				<a href="/idp">IDP</a>
			</li>
			<li aria-current={$page.url.pathname === '/kicker' ? 'page' : undefined}>
				<a href="/kicker">K</a>
			</li>
			<li aria-current={$page.url.pathname === '/defense' ? 'page' : undefined}>
				<a href="/defense">Def</a>
			</li>
			<li aria-current={$page.url.pathname === '/roster' ? 'page' : undefined}>
				<a href="/roster">Roster</a>
			</li>
		</ul>
	</nav>

	<div class="corner"></div>
</header>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	.corner {
		width: 3em;
		height: 3em;
	}

	/* .corner a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: 100%;
	}

	.corner img {
		width: 2em;
		height: 2em;
		object-fit: contain;
	} */

	nav {
		display: flex;
		justify-content: center;
		/* --background: rgba(255, 255, 255, 0.7); */
		--background: lightgrey;
		border-radius: 10px;
		box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
	}

	/* svg {
		width: 2em;
		height: 3em;
		display: block;
	}

	path {
		fill: var(--background);
	} */

	ul {
		position: relative;
		padding: 0;
		margin: 0;
		height: 3em;
		display: flex;
		justify-content: center;
		align-items: center;
		list-style: none;
		background: var(--background);
		background-size: contain;
	}

	li {
		position: relative;
		height: 100%;
	}

	li[aria-current='page']::before {
		--size: 6px;
		content: '';
		width: 0;
		height: 0;
		position: absolute;
		top: 0;
		left: calc(50% - var(--size));
		border: var(--size) solid transparent;
		border-top: var(--size) solid var(--color-theme-1);
	}

	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}
	nav a::before,
	nav a::after {
		content: ' |';
	}

	a:hover {
		color: var(--color-theme-1);
	}
</style>
