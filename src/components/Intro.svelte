<script>
  import copy from "$data/doc.json";
</script>

<div>
  <h1>{copy.hed}</h1>
  <p>{copy.dek}</p>

  <details>
    <summary>{copy.summary}</summary>
    <span>{@html copy.details}</span>
  </details>
</div>

<style>
  div {
    margin: 0 auto;
  }

  h1 {
    margin: 0 auto;
    line-height: 1.2;
  }
</style>
