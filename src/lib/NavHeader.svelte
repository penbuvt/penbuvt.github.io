<script>
  const routes = [
    { text: 'Schedule', href: '/schedule' },
  ];
</script>

<header class="nav-header">
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
