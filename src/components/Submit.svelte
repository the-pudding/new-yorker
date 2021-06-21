<script>
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";
  import shuffle from "$utils/shuffle.js";
  export let slug;
  export let prompt = "";

  const firebaseConfig = {
    apiKey: "AIzaSyBGOC8CbEAvm6WUSKfvj4_VPFa4zUuYy6k",
    authDomain: "new-yorker-da6db.firebaseapp.com",
    projectId: "new-yorker-da6db",
    databaseURL: "https://new-yorker-da6db-default-rtdb.firebaseio.com"
  };

  let firebase;
  let app;
  let db;
  let textareaValue;

  const onSubmit = (e) => {
    e.preventDefault();
    showMessage();
    db.ref(`${slug}/descriptions`)
      .push({ value: textareaValue })
      .then(() => {
        textareaValue = "";
      })
      .catch(console.log);
  };

  onMount(async () => {
    const module = await import("firebase/app");
    firebase = module.default;
    await import("@firebase/database");

    app = firebase.initializeApp(firebaseConfig);
    db = app.database();
    console.log(db);
  });
</script>

<div class="wrapper col">
  <form>
    <div class="inner">
      <p>{prompt}</p>
      <textarea bind:value={textareaValue} rows="4" />
      <input type="submit" on:click={onSubmit} value="Submit" />
    </div>
  </form>
</div>

<style>
  .wrapper {
    text-align: left;
  }

  .inner > * {
    display: block;
  }

  textarea {
    width: 100%;
    resize: none;
    line-height: 1.4;
  }

  input {
    background-color: var(--base-off-black);
    color: var(--base-white);
    margin: 1em 0;
  }
</style>
