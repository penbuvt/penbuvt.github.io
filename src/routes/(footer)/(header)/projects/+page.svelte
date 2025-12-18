<script lang="ts">
  import { resolveRoute } from '$app/paths';
  import type { Link } from '$lib/link.ts';
  import { makeTitle } from '$lib/title.ts';

  export let data = {};
  let title, headings;

  const pages: Link[] = [
    { text: 'To You (Original composition)', href: resolveRoute('/projects/to-you/') },
    { text: 'Make It Through (Original composition)', href: resolveRoute('/projects/make-it-through/') },
  ];
</script>

<h1 class="heading-text">{data.title}</h1>

<p>A list of my released works.</p>

<h2 id={data.headings.pages.id}>{data.headings.pages.text}</h2>

<ul>
  {#each pages as { text, href } (href)}
    <li><a {href}>{text}</a></li>
  {/each}
</ul>
