<script>
    import { onMount } from 'svelte';
    import { userStore } from '../scripts/stores.svelte';
    import { userbaseStore } from '../scripts/stores.svelte';
    
    let [user, loaded] = [null, false];
    onMount(async () => {
        loaded = true;
        userStore.subscribe(userObj => user = userObj);
    });
    const logout = () => {
        userbaseStore.subscribe(userbase => {
            userbase.signOut();
            userStore.set(null);
        });
    }
</script>
<nav>
    <div class="container">
      <span id="brand"><a href="."><img alt="lightning bolt logo" src="assets/renewable-energy.svg" />Plenti Userbase</a></span>
      <span id="links">
        <a href="user"><img alt="profile of person" src="assets/user.svg" /></a>
        <div id="sub-links">
            {#if user}
                <a href="user/login" on:click={logout}>Logout</a>
            {:else}
                <a href="user/register">Sign up</a>
                <a href="user/login">Sign in</a>
            {/if}
        </div>
      </span>
    </div>
</nav>
  
<style>
    nav, .container, #brand, #brand a {
        display: flex;
        width: 100%;
        align-items: center;
    }
    nav {
        min-height: 60px;
        box-shadow: 0px 2px 3px var(--base-light);
    }
    #brand {
        flex: 1;
        font-family: "WeblySleek UI Semibold", Arial, Helvetica, sans-serif;
    }
    #links, #links a {
        flex-wrap: nowrap;
        display: flex;
        margin: 0 5px;
        font-size: 1.25rem;
        padding: 10px;
    }
    #sub-links {
        display: none;
    }
    #sub-links a {
        padding: 0 10px;
    }
    #links:hover {
        position: relative;
        background: #f4f4f4;
    }
    #links:hover #sub-links {
        width: 100%;
        display: block;
        position: absolute;
        top: 60px;
        background: #f4f4f4;
        left: 0px;
        padding: 20px;
    }
    a {
        align-self: center;
        align-items: center;
        color: var(--base-darkest);
        text-decoration: none;
    }
    img {
        color: var(--primary-dark);
        max-width: 20px;
        padding-left: 5px;
    }
    img {
        margin-right: 10px;
        max-width: 40px;
    }
</style>