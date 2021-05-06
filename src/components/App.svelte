<script>
  import { onMount } from "svelte";
  import firebase from "firebase/app";
  import "firebase/firestore";
  import Intro from "$components/Intro.svelte";
  import Demo from "$components/helpers/Demo.svelte";
  import Footer from "$components/Footer.svelte";

  const firebaseConfig = {
    apiKey: "AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",
    authDomain: "new-yorker-da6db.firebaseapp.com",
    projectId: "new-yorker-da6db"
  };

  let app;
  let db;
  let ratingData = {};
  let status = "waiting";

  const collection = "756";

  const fetchRatings = async () => {
    try {
      // this does once
      // await db
      //   .collection("ratings")
      //   .get()
      //   .then((snapshot) => {
      // this does realtime
      await db.collection(collection).onSnapshot((snapshot) => {
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
      db.collection(collection)
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
    const doc = db.collection(collection).doc(id);
    doc.update({ [[value]]: firebase.firestore.FieldValue.increment(1) });
  };

  onMount(() => {
    if (!firebase.apps.length) {
      app = firebase.initializeApp(firebaseConfig);
      db = firebase.firestore(app);
      fetchRatings();
    }
  });

  $: console.log(ratingData);
</script>

<Intro />
<Demo />
<!-- <Footer /> -->
