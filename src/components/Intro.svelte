<script>
  import copy from "$data/doc.json";
  import wordmark from "$svg/wordmark.svg";
</script>

<section>
  <div class="wide-col">
    <h1>We couldn’t get an artificial intelligence program to win the New Yorker Caption Contest.</h1>
    <p class="dek">We did get sorta close though.</p>
    <header>
      <div class="wordmark">
        <p>A project by</p>
        <a href="https://pudding.cool" aria-label="The Pudding">{@html wordmark}</a>
      </div>
    </header>
    <!-- <details class="sm">
      <summary><span>New here? Learn about the experiment.</span></summary>
      <span>{@html copy.details}</span>
    </details> -->
  </div>
</section>

<style>
  section {
    margin: 0 auto;
    background-color: #000;
    color: #FFF;
  }

  .wide-col {
    width: calc(100% - 64px);
    margin: 0 auto;
    max-width: 1500px;
    padding-bottom: 100px;
    padding-top: 32px;
  }

  summary {
    background-color: var(--base-black);
    color: var(--base-white);
    border: none;
  }

  ::marker {
    color: var(--base-white);
  }

  h1 {
    margin: 0 auto;
    color: var(--base-white);
    font-size: 82px;
    margin-bottom: 125px;
  }

  details span {
    border-left: 2px solid rgba(255, 255, 255, 0.2);
  }

  details summary span {
    border-left: none;
  }

  header {
  }

  .dek {
    font-size: 36px;
  }

  .wordmark {
    display: flex;
    margin: 0;
  }

  .wordmark p {
    margin: 0;
    font-size: 18px;
    margin-right: 7px;
    color: rgba(255,255,255,.6);
  }

  .wordmark a {
    border: none;
    color: var(--base-gray-medium);
    width: 120px;
  }

  .wordmark a:hover {
    background-color: transparent;
  }

  .wordmark svg path {
    fill: rgba(255,255,255,.6);
  }

</style>
