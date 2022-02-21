<script context="module">
    import { writable } from 'svelte/store';
    export const userbaseStore = writable(null);
    export const userStore = writable(null);
    export const authPromiseStore = writable(null);
</script>