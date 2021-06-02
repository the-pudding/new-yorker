<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import shuffle from "$utils/shuffle.js";
  export let slug;

  const firebaseConfig = {
    apiKey: "AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",
    authDomain: "new-yorker-da6db.firebaseapp.com",
    projectId: "new-yorker-da6db"
  };

  let firebase;
  let app;
  let db;
  let submitData = [];
  let status = "waiting";

  const onSubmit = () => {
    // const doc = db.collection(slug).doc("submit");
    // doc.update({ [[value]]: firebase.firestore.FieldValue.increment(1) });
    // selected = undefined;
    // current += 1;
  };

  onMount(async () => {
    const module = await import("firebase/app");
    firebase = module.default;
    await import("firebase/firestore");

    if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
      db = firebase.firestore(app);
      // fetchRatings();
    }
  });

  $: if (typeof selected === "number") onVote();
</script>

<div class="wrapper">
  {#if current < captions.length}
    <p class="counter sm">Caption {current + 1} of {captions.length}</p>
    {#key current}
      <div in:fade>
        <!-- <button class="btn" on:click={reset}>RESET</button> -->
        <p class="caption">{captions[current].text}</p>
        <p class="prompt sm">Is this AI-generated caption funny?</p>
        <div class="vote">
          <ButtonSet
            bind:value={selected}
            options={[
              { value: 0, label: "It stinks!", emoji: "😴" },
              { value: 1, label: "It’s okay...", emoji: "😐" },
              { value: 2, label: "It works!", emoji: "😂" }
            ]}
          />
        </div>
      </div>
    {/key}
  {:else}
    <div class="thanks" in:fade>
      <p>Thanks for voting!</p>
    </div>
  {/if}
</div>

<style>
  .wrapper {
    min-height: 280px;
  }

  .vote {
    margin: 0 auto;
    padding-bottom: 2em;
  }

  .counter {
    text-align: center;
  }

  .prompt {
    text-align: center;
  }

  .caption {
    font-family: var(--serif);
    text-align: center;
  }

  .thanks {
    transform: translateY(140px);
    text-align: center;
    font-family: var(--serif);
  }

  @media only screen and (min-width: 600px) {
    .caption {
      font-size: 1.25em;
    }
  }
</style>
