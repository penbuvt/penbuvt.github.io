<script>
  import { resolveRoute } from '$app/paths';
  import penbuLogo from '$lib/images/penbu-logo-gradient-large.png';

  export let hideLogo = false;

  const routes: Link[] = [
    { text: 'Projects', href: resolveRoute('/projects') },
    { text: 'Schedule', href: resolveRoute('/schedule') },
  ];
</script>

<header class="nav-header">
  {#if !hideLogo}
    <a href="{resolveRoute('/')}">
      <img class="logo-img" src="{penbuLogo}" alt="Penbu" />
    </a>
  {/if}

  <nav>
    <menu>
    {#each routes as { text, href } }
      <li><a href="{href}">{text}</a></li>
    {/each}
  </menu>
  </nav>
</header>

<style lang="scss">
  .nav-header {
    padding: 1em 2em;
    background: var(--nav-header-background, #729fcf var(--brand-gradient));

    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .logo-img {
    width: unset;
    height: 2em;
    margin: 0;
  }

  nav {
    width: 100%;
  }

  menu {
    list-style-type: none;
    display: flex;
    justify-content: flex-end;
    gap: 1em;
    margin: 0;
    padding-left: 2em;
    padding-right: 2em;

    a {
      font-weight: bold;
      color: #000000;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
