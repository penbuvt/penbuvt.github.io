<script lang="ts">
  interface Props {
    children?: import('svelte').Snippet;
  }

  let { children }: Props = $props();
</script>

<div class="content-container">
  {@render children?.()}
  <footer>
    <small>
      © 2023–2025 PenbuVT. View the source on <a href="https://github.com/penbuvt/penbuvt.github.io">GitHub</a>.
    </small>
  </footer>
</div>

<style lang="scss">
  .content-container {
    min-height: 100vh;

    background-color: var(--secondary-color);
  }

  footer {
    position: sticky;
    top: 100vh;

    background-color: #202020;
    color: white;
    height: 3em;

    display: flex;
    justify-content: center;
    align-items: center;

    a {
      color: white;
    }
  }
</style>
