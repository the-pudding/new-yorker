<script>
  import { setContext } from "svelte";
  import Intro from "$components/Intro.svelte";
  import Contest from "$components/Contest.svelte";
  import Archive from "$components/Archive.svelte";
  import About from "$components/About.svelte";
  import Submit from "$components/Submit.svelte";
  import Footer from "$components/Footer.svelte";
  import Newsletter from "$components/Newsletter.svelte";
  import copy from "$data/doc.json";

  const themeCount = 4;

  setContext("app", { themeCount });

  const contests = copy.contest.map((d, i) => ({
    ...d,
    attempt: copy.contest.length - i
  }));

  const archiveData = contests.slice(1).map((d) => ({
    attempt: d.attempt,
    slug: d.slug,
    title: d.title,
    date: d.date
  }));

  const latest = contests[0];
  const theme = +latest.slug % themeCount;
</script>

<Intro />
<div class="c" style="--theme: var(--theme-{theme});">
  <section class="wip">
    <div class="col">
      <h2>🚨 This project is paused in support of the <strong>New Yorker Union</strong></h2>
      <p>
        The New Yorker Union is prepared to strike. We support their effort. Here are <a
          href="https://www.newyorkerunion.com/speakout">more details</a
        > on how you can support them too.
      </p>
      <p>Sign up to get notified when this project resumes.</p>
      <Newsletter center={false} />
    </div>
  </section>
  <!-- {#if copy.ready === "true"}
    <Contest {...latest} prompt={copy.prompt} />
  {:else}
    <section class="wip">
      <div class="col">
        <h2>🚧 Work In Progress 🚧</h2>
        <p>{copy.readyMessage}</p>
        <p class="sm">Get notified when this week’s approach is ready.</p>
        <Newsletter center={false} />
      </div>
    </section>
  {/if}

  <Archive data={archiveData} />
  <About tldr={copy.aboutTldr} full={copy.about} credits={copy.credits} /> -->

  <!-- <Submit slug={latest.slug} /> -->
  <Footer />
</div>

<style>
  .c {
    background-color: var(--theme);
  }

  .wip {
    padding: 1em 0;
  }
</style>
