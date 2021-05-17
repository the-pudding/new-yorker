<script>
  export let tldr;
  export let full;
</script>

<section>
  <h2>Why are we doing this?</h2>
  <p><strong>TLDR:</strong> {tldr}</p>
  <div>
    {#each full as { value }}
      <p>{value}</p>
    {/each}
  </div>
</section>
