<script lang="ts">
  import type { Snippet } from 'svelte';
  import { page } from '$app/state';
  import '$lib/font.css';
  import '$lib/global.scss';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<svelte:head>
  {#if page.data.title}
    <title>{page.data.title} | Penbu VT</title>
  {:else}
    <title>Penbu VT</title>
  {/if}
</svelte:head>

{@render children?.()}
