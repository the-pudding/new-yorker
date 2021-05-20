<script>
  import copy from "$data/doc.json";
</script>

<div>
  <div class="col">
    <h1>{copy.hed}</h1>
    <p>{copy.dek}</p>

    <details>
      <summary><span>New here? Learn About the experiment</span></summary>
      <span>{@html copy.details}</span>
    </details>
  </div>
</div>

<style>
  div {
    margin: 0 auto;
    background-color: var(--base-off-black);
    color: var(--base-gray-light);
    padding-bottom: 1em;
  }

  h1 {
    margin: 0 auto;
    line-height: 1.2;
    color: var(--base-off-white);
  }
</style>
