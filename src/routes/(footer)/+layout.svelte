<div class="content-container">
  <slot />
  <footer>
    <small>
      © 2023 – 2024 PenbuVT. View the source on <a href="https://github.com/penbuvt/penbuvt.github.io">GitHub</a>.
    </small>
  </footer>
</div>

<style lang="scss">
  .content-container {
    min-height: 100vh;
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
