<script>
  import IsThisFunny from "$components/IsThisFunny.svelte";
  export let slug;
  export let date;
  export let hed;
  export let dek;
  export let image;
  export let attempt;
  export let widgetName;
  export let widgetData;
</script>

<section>
  <div class="col">
    <div class="info">
      <p>{@html hed}</p>
      <p class="sm">{@html dek}</p>
      <details class="sm">
        <summary>
          <span>For the tech-nerds, here is how it works.</span>
        </summary>
        <span>test</span>
      </details>
    </div>

    <div class="prompt">
      <h2>Help the computer submit its best caption to this week’s contest.</h2>
      <figure>
        <figcaption class="sm">
          Here is the cartoon for <a href="https://www.newyorker.com/cartoons/contest">#{slug}</a> -
          {date}
        </figcaption>
        <img src={image} alt="captionless cartoon" />
      </figure>
      {#if widgetName === "IsThisFunny"}
        <IsThisFunny {slug} data={widgetData} />
      {/if}
    </div>

    <div class="submit sm">
      <p>
        We’ll submit the funniest caption. Your votes will also inform next week’s approach to
        generating captions; our version of a comedian testing out new material in comedy clubs.
      </p>
      <p>
        Come back next week to vote on captions for a new cartoon and see how our approach evolves.
      </p>
    </div>
  </div>
</section>

<style>
  section {
    padding: 1em 0;
    max-width: var(--max-width);
    margin: 0 auto;
  }

  .prompt {
    margin-top: 3em;
  }

  figcaption {
    line-height: 1.4;
    margin-bottom: 1em;
  }
</style>
