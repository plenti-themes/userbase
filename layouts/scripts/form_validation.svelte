<script context="module">
    export const completeUser = username => username.length > 0;
    export const completePass = password => password.length >= 6;
    export const passMatch = (password, confirmPass) => password === confirmPass;
    export const validEmail = email => /\\S+@\\S+\.\\S+/.test(email); // Double backslashes.
</script>