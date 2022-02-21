<script>
    import { onMount } from 'svelte';
    import { completeUser } from '../scripts/form_validation.svelte';
    import { completePass } from '../scripts/form_validation.svelte';
    import { validEmail } from '../scripts/form_validation.svelte';
    import FormErrs from '../components/form_errors.svelte';

    import { userStore } from '../scripts/stores.svelte';
    import { userbaseStore } from '../scripts/stores.svelte';
    import { authPromiseStore } from '../scripts/stores.svelte';

    let [buttonTxt, username, password, validationErrs] = ['Sign in', '', '', []];
    const signIn = () => {
        validationErrs = [];
        if (!completeUser(username)) validationErrs = [...validationErrs, "Missing email address"];
        if (!completePass(password)) validationErrs = [...validationErrs, "Password must be at least 6 characters"];
        if (!validEmail(username)) validationErrs = [...validationErrs, "Email not valid"];
        if (validationErrs.length < 1) {
            buttonTxt = "authenticating...";
            userbaseStore.subscribe(userbase => {
                userbase.signIn({username, password})
                    .then((user) => userStore.set(user))
                    .then(() => window.history.pushState('', 'Login', '/user'))
                    .catch(error => {
                        validationErrs = [...validationErrs, error.message];
                        buttonTxt = "Sign in";
                    });
            });
        }
    }

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
            { window.history.pushState('', 'Login', '/user') }
        {:else}
            <form>
                <FormErrs {validationErrs} />
                <div>
                    <label for="email">Email</label>
                    <input id="email" type="email" bind:value={username} />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input id="password" type="password" bind:value={password} />
                </div>
                <button on:click={signIn} type="button">{buttonTxt}</button>
                <div class="switch">Don't have an account? <a href="/user/register">Sign up</a></div>
            </form>
        {/if}        
    {/if}        
{:catch error}
    Error: {error}
{/await}