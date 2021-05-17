<script>
  import Intro from "$components/Intro.svelte";
  import Contest from "$components/Contest.svelte";
  import Archive from "$components/Archive.svelte";
  import About from "$components/About.svelte";
  import Footer from "$components/Footer.svelte";
  import copy from "$data/doc.json";

  const contests = copy.contest.map((d, i) => ({
    ...d,
    attempt: i + 1
  }));

  const archiveData = contests.slice(1).map((d) => ({
    slug: d.slug,
    title: d.title
  }));
</script>

<div class="wrapper">
  <Intro />
  <Contest {...contests[0]} prompt={copy.prompt} />
  <Archive data={archiveData} />
  <About tldr={copy.aboutTldr} full={copy.about} />
</div>

<!-- <Footer /> -->
<style>
  .wrapper {
    max-width: 540px;
    margin: 0 auto;
    padding: 0 1em;
  }
</style>
