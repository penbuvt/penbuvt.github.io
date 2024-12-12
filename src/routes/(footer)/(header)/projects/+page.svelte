<script type="ts">
  import { resolveRoute } from '$app/paths';
  import type { Link } from '$lib/link.ts';

  const pages: Link[] = [
    { text: 'To You (Original composition)', href: resolveRoute('/projects/to-you/') },
    { text: 'Make It Through (Original composition)', href: resolveRoute('/projects/make-it-through/') },
  ];
</script>

<h1 class="heading-text">Projects</h1>

<p>A list of my released works.</p>

<h2 id="pages">Pages</h2>

<ul>
  {#each pages as { text, href } (href)}
    <li><a {href}>{text}</a></li>
  {/each}
</ul>
