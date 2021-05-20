<script>
  import IsThisFunny from "$components/IsThisFunny.svelte";
  export let slug;
  export let date;
  export let title;
  export let description;
  export let image;
  export let attempt;
  export let widgetName;
  export let widgetData;
</script>

<section>
  <div class="info">
    <p><a href="#archive" class="btn">View the archive of attempts</a></p>

    <p>{description} <a href="contest/{slug}">Read more about this week’s approach</a></p>
  </div>

  <div class="prompt">
    <p>
      Help the computer submit its best caption to this week’s New Yorker <a
        href="https://www.newyorker.com/cartoons/contest">Cartoon Caption Contest</a
      >
    </p>
    <figure>
      <img src={image} alt="captionless cartoon" />
      <figcaption>
        Here is the cartoon <a href="https://www.newyorker.com/cartoons/contest">{date}</a> #{slug}.
      </figcaption>
    </figure>
    {#if widgetName === "IsThisFunny"}
      <IsThisFunny {slug} data={widgetData} />
    {/if}
  </div>

  <div class="submit">
    <p>
      We’ll submit the funniest caption. Your votes will also inform next week’s approach to
      generating captions; our version of a comedian testing out new material in comedy clubs.
    </p>
    <p>
      Come back next week to vote on captions for a new cartoon and see how our approach evolves.
    </p>
  </div>
</section>

<style>
  section {
    max-width: var(--max-width);
    margin: 1em auto;
  }
  figcaption {
    font-size: 0.75em;
    text-align: center;
  }
</style>
