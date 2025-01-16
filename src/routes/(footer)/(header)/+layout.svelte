<script lang="ts">
  import NavHeader from '$lib/NavHeader.svelte';
  import TableOfContents from '$lib/TableOfContents.svelte';

  import { page } from '$app/stores';
</script>

<NavHeader />

<div class="content-container">
  <div class="toc-container">
    <TableOfContents headings={$page.data?.headings} />
  </div>
  <div class="content">
    <slot />
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
    padding: 1em 2em;
    overflow-x: hidden;
  }

  .toc-container {
    flex: 0 1 auto;

    & > :global(.toc) {
      position: sticky;
      top: 1rem;
    }
  }
</style>
