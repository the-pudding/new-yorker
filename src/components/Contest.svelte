<script>
  import { onMount } from "svelte";
  export let slug;
  export let date;
  export let title;
  export let description;
  export let image;
  export let attempt;
  export let prompt;
  export let more;
  export let archives;

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
    console.log(d.id);
    return new Promise((resolve, reject) => {
      db.collection(slug)
        .doc(d.id)
        .set({
          funny: 0,
          unfunny: 0
        })
        .then(resolve)
        .catch(reject);
    });
  };

  const reset = async () => {
    status = "pending";
    for (let d of []) {
      try {
        await setDoc(d);
      } catch (err) {
        console.log(err);
      }
    }
    status = "complete";
  };

  const onRate = ({ detail }) => {
    const { value, id } = detail;
    const doc = db.collection(slug).doc(id);
    doc.update({ [[value]]: firebase.firestore.FieldValue.increment(1) });
  };

  onMount(async () => {
    const module = await import("firebase/app");
    firebase = module.default;
    await import("firebase/firestore");

    if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
      db = firebase.firestore(app);
      fetchRatings();
    }
  });

  $: console.log(ratingData);
</script>

<div class="info">
  <h2>Attempt #{attempt}: {title}</h2>
  {#if archives > 0}
    <p>view the <a href="#archive">attempt archive</a></p>
  {/if}

  <p>Contest #{slug}, {date}</p>
  <p>{description} <a href="contest/{slug}">{more}</a></p>
</div>

<div class="prompt">
  <p>{@html prompt}</p>
  <img src={image} alt="captionless cartoon" />
</div>
