<script>
  import copy from "$data/doc.json";
</script>

<section>
  <div class="col">
    <h1>{copy.hed}</h1>
    <p>{copy.dek}</p>

    <details class="sm">
      <summary><span>New here? Learn about the experiment.</span></summary>
      <span>{@html copy.details}</span>
    </details>
  </div>
</section>

<style>
  section {
    margin: 0 auto;
    background-color: var(--base-off-black);
    color: var(--base-gray-light);
    padding-bottom: 3em;
  }

  h1 {
    margin: 0 auto;
    color: var(--base-off-white);
  }
</style>
