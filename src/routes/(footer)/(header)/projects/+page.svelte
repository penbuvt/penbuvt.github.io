<script lang="ts">
  import type { ComponentProps } from 'svelte';

  import { resolveRoute } from '$app/paths';
  import type { Link } from '$lib/link.ts';
  import { makeTitle } from '$lib/title.ts';
  import PageCard from '$lib/PageCard.svelte';

  export let data = {};
  let title, headings;

  const pages: ComponentProps<PageCard>[] = [
    {
      text: 'To You (Original composition)',
      href: resolveRoute('/projects/to-you/'),
      image: 'https://files.penbuvt.ca/music/to-you/album-art.300px.png',
      imageAlt: 'Cover art',
    },
    {
      text: 'Make It Through (Original composition)',
      href: resolveRoute('/projects/make-it-through/'),
      image: 'https://files.penbuvt.ca/music/make-it-through/album-art.300px.png',
      imageAlt: 'Cover art',
    },
  ];
</script>

<h1 class="heading-text">{data.title}</h1>

<p>A list of my released works.</p>

<ul class="page-list">
  {#each pages as page (page.href)}
    <li><PageCard {...page} /></li>
  {/each}
</ul>

<style lang="scss">
  .page-list {
    display: flex;
    padding: 0;
    flex-wrap: wrap;
    gap: 2em;
    list-style-type: none;

    & > li {
      width: 18em;
    }
  }
</style>
