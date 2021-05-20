<script>
  export let tldr;
  export let full;
</script>

<section>
  <div class="col">
    <p>Why are we doing this?</p>
    <p class="sm"><strong>TLDR:</strong> {tldr}</p>
    <details class="sm">
      <summary>And if you want, here’s the long version </summary>
      <span>
        {#each full as { value }}
          <p>{value}</p>
        {/each}
      </span>
    </details>
  </div>
</section>
