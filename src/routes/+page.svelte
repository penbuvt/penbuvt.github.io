<div>
  <main>
    <div class="hero">
      <section>
        <h1 class="main-header">
          Penbu
        </h1>
        <h2 class="subtitle">
          Programming, puzzle-gaming, music-making vtuber on Linux.
        </h2>
      </section>
      <section>
        <iframe class="featured-video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=PXGk0Hhs4F723Dn2&amp;list=UUPV8mWVjn4ZXjlb3DVnL-bysQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </section>
    </div>
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
    display: flex;
    height: 100vh;

    background-color: #729fcf;
    background-image: linear-gradient(
      math.atan(math.div(1080, 1920)) + 90deg,
      #729fcf,
      #729fcf,
      #8ae23480
    );
  }

  .hero {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-evenly;
    min-height: 100vh;
    width: 100%;
    box-sizing: border-box;
    padding: 0 2rem;
    gap: 2em;
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
