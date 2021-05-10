<script>
  export let text;
  export let data;
</script>

<div id="archive">
  {#if data.length}
    <p>{text}</p>
    <ul>
      {#each data as { slug, title }}
        <li><a href="/contests/{slug}">#{slug}: {title}</a></li>
      {/each}
    </ul>
  {/if}
</div>
