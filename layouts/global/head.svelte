<script>
  export let title, env;
</script>

<head>
  <meta charset='utf-8'>
  <meta name='viewport' content='width=device-width,initial-scale=1'>

  <title>{ title }</title>

  <base href="{ env.local ? '/' : env.baseurl }">
  <script type="module" src="spa/ejected/main.js"></script>

  <link rel="icon" type="image/svg+xml" href="assets/logo.svg">
  <link rel='stylesheet' href='spa/bundle.css'>
  <link rel='stylesheet' href='assets/global.css'>
  <script type="text/javascript" src="https://sdk.userbase.com/2/userbase.js"></script>
</head>
