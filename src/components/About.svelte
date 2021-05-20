<script>
  export let tldr;
  export let full;
</script>

<section>
  <h2>Why are we doing this?</h2>
  <p><strong>TLDR:</strong> {tldr}</p>
  <summary>
    And if you want, here’s <span>the long version</span>
    <detail>
      {#each full as { value }}
        <p>{value}</p>
      {/each}
    </detail>
  </summary>
</section>
