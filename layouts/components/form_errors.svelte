<script>
    export let validationErrs;
</script>

{#if validationErrs}
    <ul>
        {#each validationErrs as err}
            <li>{err}</li>
        {/each}
    </ul>
{/if}

<style>
    li {
        color:red;
    }
</style>