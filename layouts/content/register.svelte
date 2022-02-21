<script>
    import { onMount } from 'svelte';
    import { completeUser } from '../scripts/form_validation.svelte';
    import { completePass } from '../scripts/form_validation.svelte';
    import { passMatch } from '../scripts/form_validation.svelte';
    import { validEmail } from '../scripts/form_validation.svelte';
    import FormErrs from '../components/form_errors.svelte';
    import { userbaseStore } from '../scripts/stores.svelte';
    import { userStore } from '../scripts/stores.svelte';
    import { authPromiseStore } from '../scripts/stores.svelte';

    let [buttonTxt, username, password, confirmPass, validationErrs] = ['Create account', '', '', '', []];
    const signUp = () => {
        validationErrs = [];
        if (!completeUser(username)) validationErrs = [...validationErrs, "Missing email address"];
        if (!completePass(password)) validationErrs = [...validationErrs, "Password must be at least 6 characters"];
        if (!passMatch(password, confirmPass)) validationErrs = [...validationErrs, "Passwords do not match"];
        if (!validEmail(username)) validationErrs = [...validationErrs, "Email not valid"];
        if (validationErrs.length < 1) {
            buttonTxt = "creating user...";
            userbaseStore.subscribe(userbase => {
                userbase.signUp({ username, password, rememberMe: 'none' })
                    .then((user) => userStore.set(user))
                    .then(() => window.history.pushState('', 'Login', '/user'))
                    .catch(error => {
                        validationErrs = [...validationErrs, error.message];
                        buttonTxt = "Create account";
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
                    <input id="email" type="email" bind:value={username} required />
                </div>
                <div>
                    <label for="password">Password</label>
                    <input id="password" type="password" bind:value={password} required />
                </div>
                <div>
                    <label for="confirm-password">Confirm Password</label>
                    <input id="confirm-password" type="password" bind:value={confirmPass} required />
                </div>
                <button on:click={signUp} type="button">{buttonTxt}</button>
                <div class="switch">Already have an account? <a href="/user/login">Sign in</a></div>
            </form>
        {/if}        
    {/if}        
{:catch error}
    Error: {error}
{/await}