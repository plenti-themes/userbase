<script>
    import { userbaseStore } from '../scripts/stores.svelte';

    let userInput = '', buttonTxt = 'Add key'; 
    let savedKey = null;
    let savedKeyID = null;
    const changeHandler = items => {
        savedKey = items[0].item;
        savedKeyID = items[0].itemId;
    }

    const databaseName = "key";
    userbaseStore.subscribe(userbase => {
        userbase.openDatabase({databaseName, changeHandler})
            .catch(error => console.log(error));
    });

    let savePromise;
    const saveKey = () => {
        buttonTxt = 'Saving key';
        if (savedKey) {
            savePromise = userbase.updateItem({ databaseName, itemId: savedKeyID, item: userInput });
        } else {
            savePromise = userbase.insertItem({ databaseName, item: userInput });
        }
        editing = false;
    }

    let editing = false;
    const edit = () => {
        editing = true;
        userInput = savedKey;
        buttonTxt = 'Update key'
    }

    let toggle = 'show'
    const showHide = () => toggle = toggle === 'show' ? 'hide' : 'show';

</script>

{#await savePromise}
    Loading...
{:then _} 
    {#if savedKey && !editing}
        <div>
            <strong>API Key:</strong> <span class:protect={toggle === 'show'}>{savedKey}</span> <a href="{"javascript:void(0)"}" on:click={showHide}>{toggle}</a> <a href={"javascript:void(0)"} on:click={edit}>Edit</a>
        </div>
    {:else}
        <form>
            <label for="key-input">API / Subscription Key</label>
            <input id="key-input" type="text" bind:value={userInput} />
            <button type="button" on:click={saveKey}>{buttonTxt}</button>
        </form>
    {/if}
{/await}

<style>
    .protect {
        -webkit-text-security: disc;
        color: transparent;
        text-shadow: 0 0 10px rgba(0,0,0,1);
    }
</style>