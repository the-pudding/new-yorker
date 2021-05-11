<script>
  import { onMount } from "svelte";
  import ButtonSet from "$components/helpers/ButtonSet.svelte";
  export let slug;
  export let data;

  let selected;
  let docMap = ["unfunny", "neutral", "funny"];

  const captions = data.map((text, id) => ({ text, id }));

  const firebaseConfig = {
    apiKey: "AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",
    authDomain: "new-yorker-da6db.firebaseapp.com",
    projectId: "new-yorker-da6db"
  };

  let firebase;
  let app;
  let db;
  let ratingData = {};
  let status = "waiting";

  const fetchRatings = async () => {
    try {
      // this does once
      // await db
      //   .collection("ratings")
      //   .get()
      //   .then((snapshot) => {
      // this does realtime
      await db.collection(slug).onSnapshot((snapshot) => {
        snapshot.forEach((doc) => {
          ratingData[doc.id] = doc.data();
        });
      });
      ratingData = ratingData;
    } catch (err) {
      console.log(err);
    }
  };

  const setDoc = (d) => {
    return new Promise((resolve, reject) => {
      db.collection(slug)
        .doc(`${d.id}`)
        .set({
          unfunny: 0,
          neutral: 0,
          funny: 0
        })
        .then(resolve)
        .catch(reject);
    });
  };

  const reset = async () => {
    status = "pending";
    for (let d of captions) {
      try {
        await setDoc(d);
      } catch (err) {
        console.log(err);
      }
    }
    status = "complete";
  };

  const onVote = () => {
    const { id } = captions[0];
    const doc = db.collection(slug).doc(`${id}`);
    const value = docMap[selected];
    doc.update({ [[value]]: firebase.firestore.FieldValue.increment(1) });
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

<button class="btn" on:click={reset}>RESET</button>

<div class="vote">
  <ButtonSet
    bind:value={selected}
    options={[
      { value: 0, label: "I don’t get it" },
      { value: 1, label: "Light chuckle" },
      { value: 2, label: "That’s Funny!" }
    ]}
  />
</div>
{#each captions as { text, id }}
  <p data-id={id}>{text}</p>
{/each}

<style>
  .vote {
    max-width: 20em;
    margin: 0 auto;
  }
</style>
