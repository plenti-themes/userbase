<script>
    import { onMount } from 'svelte';
    import { userbaseStore } from '../scripts/stores.svelte';
    import { userStore } from '../scripts/stores.svelte';

    import Key from './key.svelte';

    let username;
    onMount(async () => {
        userStore.subscribe(user => {
            username = user.username;
        });
    });

    const logout = () => {
        userbaseStore.subscribe(userbase => {
            userbase.signOut();
            userStore.set(null);
        });
    }

</script>

<h1>Welcome {username}</h1>

<Key />

<a href="/user/login" on:click={logout}>Logout</a>