<script lang="ts">
  import type { Snippet } from 'svelte';
  import NavHeader from '$lib/NavHeader.svelte';
  import TableOfContents from '$lib/TableOfContents.svelte';

  import { page } from '$app/state';
  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<NavHeader />

<div class="content-container">
  <div class="toc-container">
    <TableOfContents headings={page.data?.headings} />
  </div>
  <div class="content">
    <main>
      {@render children?.()}
    </main>
  </div>
</div>

<style lang="scss">
  .content-container {
    display: flex;

    & > * {
      flex: 1 1 auto;
    }
  }

  .content {
    box-sizing: content-box;
    max-width: 80ch;
    margin: 0 auto;
    padding: 1em 2em;
    overflow-x: hidden;
  }

  main {
    box-sizing: border-box;
  }

  .toc-container {
    flex: 0 1 auto;

    & > :global(.toc) {
      position: sticky;
      top: 1rem;
    }
  }
</style>
