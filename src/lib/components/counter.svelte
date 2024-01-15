<script lang="ts">
	export let name: string = '';

	let timesClicked = 0;

	function handleClick() {
		timesClicked += 1;
	}
</script>

<h1>Hello {name}!</h1>

<button on:click={handleClick}>{timesClicked}</button>
