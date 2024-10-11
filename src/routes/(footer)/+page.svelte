<script>
  import NavHeader from '$lib/NavHeader.svelte';

  import penbuLogo from '$lib/images/penbu-logo-gradient-large.png';
  import youtubeIcon from '$lib/images/social-icons/youtube.svg';
  import youtubeIconColor from '$lib/images/social-icons/youtube-color.svg';
  import twitchIcon from '$lib/images/social-icons/twitch.svg';
  import twitchIconColor from '$lib/images/social-icons/twitch-color.svg';
  import discordIcon from '$lib/images/social-icons/discord.svg';
  import discordIconColor from '$lib/images/social-icons/discord-color.svg';
  import xIcon from '$lib/images/social-icons/x.svg';
  import xIconColor from '$lib/images/social-icons/x-color.svg';
  import githubIcon from '$lib/images/social-icons/github.svg';
  import githubIconColor from '$lib/images/social-icons/github-color.svg';
</script>

<div>
  <div class="hero-container">
    <NavHeader />
    <main>
      <div class="hero">
        <section class="hero-left">
          <hgroup>
            <h1 class="main-header">
              <img class="hero-logo" src="{penbuLogo}" alt="Penbu" />
            </h1>
            <p class="subtitle">
              Programming, puzzle-gaming, music-making vtuber on Linux.
            </p>
          </hgroup>
          <div class="socials">
            <a class="social-icon" href="https://www.youtube.com/@PenbuVT" style="--color-src: url({youtubeIconColor});" title="YouTube">
              <img width="64" height="64" src="{youtubeIcon}" alt="YouTube" />
            </a>
            <a class="social-icon" href="https://twitch.tv/penbuvt" style="--color-src: url({twitchIconColor});" title="Twitch">
              <img width="64" height="64" src="{twitchIcon}" alt="Twitch" />
            </a>
            <a class="social-icon" href="https://discord.gg/X5XZDfBSPG" style="--color-src: url({discordIconColor});" title="Discord">
              <img width="64" height="64" src="{discordIcon}" alt="Discord" />
            </a>
            <a class="social-icon" href="https://twitter.com/penbuvt" style="--color-src: url({xIconColor});" title="X (Twitter)">
              <img width="64" height="64" src="{xIcon}" alt="X (Twitter)" />
            </a>
            <a class="social-icon" href="https://github.com/penbuvt" style="--color-src: url({githubIconColor});" title="GitHub">
              <img width="64" height="64" src="{githubIcon}" alt="GitHub" />
            </a>
          </div>
        </section>
        <section>
          <iframe class="featured-video" width="560" height="315" src="https://www.youtube.com/embed/videoseries?si=PXGk0Hhs4F723Dn2&amp;list=UUPV8mWVjn4ZXjlb3DVnL-bysQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </section>
      </div>
    </main>
  </div>
  <footer>
    <small>
      © 2023 – 2024 PenbuVT. View the source on <a href="https://github.com/penbuvt/penbuvt.github.io">GitHub</a>.
    </small>
  </footer>
</div>

<style lang="scss">
  @use 'sass:math';

  .hero-container {
    height: 100vh;

    background-color: #729fcf;
    background-image: linear-gradient(
      math.atan(math.div(1080, 1920)) + 90deg,
      #729fcf,
      #729fcf,
      #8ae23480
    );
  }

  main {
    display: flex;
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

  hgroup .subtitle {
    font-size: 1.5em;
    font-weight: bold;
  }

  .hero-left {
    text-align: center;
  }

  .hero-logo {
    width: auto;
    max-height: 9rem;
    max-width: 100%;
  }

  .socials {
    display: flex;
    justify-content: center;
    gap: 1em;
    flex-wrap: wrap;

    .social-icon {
      position: relative;

      img {
        width: 4em;
        height: 4em;

        opacity: 0.75;
        transition: opacity 150ms ease-in-out;
      }

      &::before {
        content: var(--color-src);
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 4em;
        height: 4em;
        z-index: 1;

        opacity: 0;
        transition: opacity 150ms ease-in-out;
      }

      &:hover,
      &:focus {
        &::before {
          opacity: 1;
        }
      }
    }
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
