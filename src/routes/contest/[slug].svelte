<script context="module">
  export async function load({ page, fetch, session, context }) {
    const url = `/blog/${page.params.slug}.json`;
    // const res = await fetch(url);

    // if (res.ok) {
    if (true) {
      return {
        props: {
          // article: await res.json()
          article: "sup"
        }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
  }
</script>

<script>
  export let article;
</script>

<h1>{article}</h1>
