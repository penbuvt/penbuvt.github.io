<div>
  <main>
  </main>
  <footer>
    <small>
      © 2023 – 2024 PenbuVT. View the source on <a href="https://github.com/penbuvt/penbuvt.github.io">GitHub</a>.
    </small>
  </footer>
</div>

<style lang="scss">
  @use 'sass:math';

  main {
    height: 100vh;

    background-color: #729fcf;
    background-image: linear-gradient(
      math.atan(math.div(1080, 1920)) + 90deg,
      #729fcf,
      #729fcf,
      #8ae23480
    );
  }

  footer {
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
