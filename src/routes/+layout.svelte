<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  {#if $page.data.title}
    <title>{$page.data.title} | Penbu VT</title>
  {:else}
    <title>Penbu VT</title>
  {/if}
</svelte:head>

<slot />

<style lang="scss">
  @use 'sass:math';
  @import '$lib/font.css';
  @import '$lib/global.css';

  // Global border-box
  :global(html) {
    box-sizing: border-box;
  }
  :global(*, *:before, *:after) {
    box-sizing: inherit;
  }

  :global(body) {
    margin: 0;
  }

  :global(a:link) {
    color: var(--primary-link-color);
  }

  :global(a:visited) {
    color: var(--visited-link-color);
  }

  :global(a:link:hover),
  :global(a:link:focus) {
    color: var(--hover-link-color);
  }

  :global(a:visited:hover),
  :global(a:visited:focus) {
    color: var(--hover-visited-link-color);
  }

  :global(a:active) {
    color: var(--active-link-color);
  }

  :root {
    /* Primary theme color */
    --primary-color: #498E4E;
    /* Primary theme text color */
    --primary-text-color: #000000;
    --primary-text-color-over: #000;
    /* Primary theme link color */
    --primary-link-color: #204A87;
    --visited-link-color: #5C3566;
    --hover-link-color: #3465A4;
    --hover-visited-link-color: #75507B;
    --active-link-color: #CC0000;
    /* Secondary color: the background body color */
    --secondary-color: #EEEEEC;
    --secondary-text-color: #2E3436;
    /* Highlight text color of table of content */
    --toc-highlight-text-color: #498E4E;
    --toc-background-color: white;
    --code-color: #4a4a4a;
    --code-background-color: white;

    --shadow-color: #BABDB6;

    /* Font used for headers (h1 & h2) */
    --header-font-family: "Tiresias Infofont", sans-serif;
    /* Font used for text */
    --text-font-family: "DejaVu Sans", sans-serif;

    --brand-gradient: linear-gradient(
      #{math.atan(math.div(1080, 1920)) + 90deg,
        #729fcf,
        #729fcf,
        #8ae23480
      }
    );
  }
</style>
