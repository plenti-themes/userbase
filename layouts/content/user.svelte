<script>
    import { onMount } from 'svelte';
    import Dashboard from '../components/dashboard.svelte';
    import { userStore } from '../scripts/stores.svelte';
    import { authPromiseStore } from '../scripts/stores.svelte';

    let [user, loaded] = [null, false];
    onMount(async () => {
        loaded = true;
        userStore.subscribe(userObj => user = userObj);
    });

    let authPromise;
    authPromiseStore.subscribe(aP => authPromise = aP);

</script>

{#await authPromise}
    Loading...
{:then _} 
    {#if loaded}
        {#if user}
            <Dashboard />
        {:else}
            { window.history.pushState('', 'Login', 'user/login') }
        {/if}        
    {/if}
{/await}