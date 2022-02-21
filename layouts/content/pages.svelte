<script>
    export let title, list;
</script>

<h1>{title}</h1>

<ul>
    {#each list as item}
        <li><strong>{item.title}:</strong> <a href="{item.link}" target="blank" rel="noopener noreferrer">{item.link}</a></li>
    {/each}
</ul>