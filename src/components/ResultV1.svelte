<script>
  import ProgressBar from "./ProgressBar.svelte";
  import { onMount } from "svelte";
  let showDiv = false;

  const showContent = async () => {
    await new Promise((resolve) => setTimeout(resolve, 6000));
    showDiv = true;
  };

  onMount(showContent);
</script>

{#if !showDiv}
  <ProgressBar />
{/if}

{#if showDiv}
  <div>
    <h1>Result V1</h1>
    <h2>Entered data</h2>
    <slot />
  </div>
{/if}

<style>
  h1 {
    text-align: center;
  }

  h2 {
    text-align: center;
  }
</style>
