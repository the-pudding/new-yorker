<script>
  import wordmark from "$svg/wordmark.svg";
</script>

<header>
  <div class="wordmark">
    <a href="https://pudding.cool">{@html wordmark}</a>
  </div>
</header>

<style>
  header {
    background-color: var(--base-off-black);
  }

  .wordmark {
    max-width: 10em;
    margin: 0 auto;
    padding: 1em 0;
  }

  .wordmark a {
    border: none;
    color: var(--base-gray-medium);
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  :global(.wordmark svg path) {
    fill: currentColor;
  }
</style>
