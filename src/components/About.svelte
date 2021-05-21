<script>
  export let tldr;
  export let full;
  export let credits;
</script>

<section>
  <div class="col">
    <p>Why are we doing this?</p>
    <p class="sm"><strong>TLDR:</strong> {tldr}</p>
    <details class="sm">
      <summary>And if you want, here’s the long version.</summary>
      <span>
        {#each full as { value }}
          <p>{@html value}</p>
        {/each}
      </span>
    </details>
    <p class="sm">{@html credits}</p>
    <p class="sm">
      Want to see another experiment with GPT-3? Check out <a
        href="https://pudding.cool/2021/03/love-and-ai/">Nothing Breaks Like A.I. Heart</a
      >.
    </p>
  </div>
</section>

<style>
  section {
    padding-bottom: 2em;
  }
</style>
