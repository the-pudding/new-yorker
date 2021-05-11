<script>
  export let data;
</script>

<div id="archive">
  <p>Read about our past attempts</p>
  {#if data.length}
    <ul>
      {#each data as { slug, title }}
        <li><a href="/contests/{slug}">#{slug}: {title}</a></li>
      {/each}
    </ul>
  {:else}
    <ul>
      <li>Nothing here yet! Check back next week.</li>
    </ul>
  {/if}
</div>
