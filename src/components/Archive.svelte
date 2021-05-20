<script>
  export let data;
</script>

{#if data.length}
  <div id="archive">
    <div class="col">
      <p>Each week we try a new attempt!</p>

      <ul>
        {#each data as { slug, title }}
          <li><a href="/contests/{slug}">#{slug}: {title}</a></li>
        {/each}
      </ul>
    </div>
  </div>
{/if}
