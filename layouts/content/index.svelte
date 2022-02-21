<script>
	export let title, intro, desc, button;
</script>

<section>
	<img src="assets/perry.png" alt="Plenti planarian" />
	<img src="assets/userbase.png" alt="Userbase icon" />
	<h1>{@html title}</h1>
	<h2>{@html intro}</h2>
	<div>{desc}</div>
	<a href="user" class="btn">{button}</a>
</section>

<style>
	section {
		text-align: center;
		padding: 20px 0;
	}
</style>