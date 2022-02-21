<script>
  import Head from './head.svelte';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  import { onMount } from 'svelte';
  import { userStore } from '../scripts/stores.svelte';
  import { userbaseStore } from '../scripts/stores.svelte';
  import { authPromiseStore } from '../scripts/stores.svelte';

  onMount(async () => {
      userbaseStore.set(window.userbase);
      userbaseStore.subscribe(userbase => {
        let authPromise = userbase.init({
            appId: 'a986a20c-7654-4c44-9e5e-1ea0b57803d9',
            allowServerSideEncryption: true
          })
          .then(({user}) => userStore.set(user));
        authPromiseStore.set(authPromise);
      });
  });

  export let content, layout;
</script>

<html lang="en">
<Head title={content.filename} />
<body>
  <Nav />
  <div class="container">
    <svelte:component this={layout} {...content.fields} />
  </div>
  <Footer />
</body>
</html>

<style>
  body {
    margin: 0;
    font-family: "WeblySleek UI Light", Arial, Helvetica, sans-serif;
    letter-spacing: -.025em;
    font-size: 1.5rem;
    line-height: 2rem;
  }
</style>