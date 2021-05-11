<script context="module">
  import copy from "$data/doc.json";

  export const hydrate = false;

  export async function load({ page, fetch, session, context }) {
    // const url = `/blog/${page.params.slug}.json`;
    // const res = await fetch(url);

    const contests = copy.contest.map((d, i) => ({
      ...d,
      attempt: i + 1
    }));
    const contest = contests.find((d) => d.slug === page.params.slug);

    if (contest) {
      return {
        props: {
          ...contest
        }
      };
    }

    return {
      status: 404,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
  import Meta from "$components/Meta.svelte";
  export let slug;
  export let date;
  export let title;
  export let description;
  export let image;
  export let attempt;
</script>

<Meta title={`New Yorker Cartoon Caption Contest Attempt #${attempt}: ${title}`} />

<div class="info">
  <h2>Attempt #{attempt}: {title}</h2>

  <p>Contest #{slug}, {date}</p>
  <p>{description}</p>
</div>

<div class="prompt">
  <img src={image} alt="captionless cartoon" />
</div>
