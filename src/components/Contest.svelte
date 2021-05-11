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

<div class="info">
  <h2>Attempt #{attempt}: {title}</h2>
  <p><a href="#archive" class="btn">View the archive of attempts</a></p>

  <p>Contest #{slug}, {date}</p>
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
      Cartoon for New Yorker Caption Contest <a href="https://www.newyorker.com/cartoons/contest"
        >#{slug}</a
      >
    </figcaption>
  </figure>
  {#if widgetName === "IsThisFunny"}
    <IsThisFunny {slug} data={widgetData} />
  {/if}
</div>

<style>
  figcaption {
    font-size: 0.75em;
    text-align: center;
  }
</style>
