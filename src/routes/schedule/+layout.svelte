<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

{@render children?.()}

<style lang="scss">
  :global(html),
  :global(body) {
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
