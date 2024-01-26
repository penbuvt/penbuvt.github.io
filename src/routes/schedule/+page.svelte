<script lang="ts">
  import Event from '$lib/schedule/event.svelte';

  const data = {
    "version": "1.0",
    "title": "Schedule for 2024-W04",
    "events": [
      {
        "type": "stream",
        "title": "Mini Metro",
        "url": "https://www.youtube.com/watch?v=m6gWuOhcViw",
        "datetime": "2024-01-24T19:30:00-0500",
        "id": "09brkmc5qq2h7jrijuv8k1tmlf@google.com"
      },
      {
        "type": "stream",
        "title": "Converting website to Svelte",
        "url": "https://www.youtube.com/watch?v=AbRPlkLFcBs",
        "datetime": "2024-01-25T19:30:00-0500",
        "id": "51k7k6q6ng08g5vrhigtfesn0d@google.com"
      },
      {
        "type": "stream",
        "title": "Arranging Suisei's \"Pieces\"",
        "url": "https://www.youtube.com/watch?v=Wk_vfMp4GEo",
        "datetime": "2024-01-26T19:30:00-0500",
        "id": "0ttdajsu5i3344o4bleklgltu3@google.com"
      }
    ]
  };
</script>

<div id="schedule" class="schedule">
  <main class="schedule-contents">
    <div class="schedule-info">
      <h1 class="logo"><a href="/"><img src="/images/penbu-logo-gradient-large.png" alt="Penbu" class="logo-image" /></a></h1>
      <h2 id="title" class="logo">{data.title}</h2>
      <p>See the latest at <a href="/schedule">penbuvt.ca/schedule</a></p>
    </div>
    <div id="schedule-events" class="schedule-events">
      {#each data.events as event}
        <Event {event} />
      {/each}
    </div>
  </main>
  <footer class="socials">
    <a href="https://www.youtube.com/@PenbuVT"><img src="/images/social-icons/youtube.svg" alt="YouTube:" width="24" height="24" class="social-icon" /> @PenbuVT</a>
    <a href="https://twitter.com/PenbuVT"><img src="/images/social-icons/x.svg" alt="X (Twitter):" width="24" height="24" class="social-icon" /> @PenbuVT</a>
    <a href="https://discord.gg/X5XZDfBSPG"><img src="/images/social-icons/discord.svg" alt="Discord:" width="24" height="24" class="social-icon" /> discord.gg/X5XZDfBSPG</a>
    <a href="https://www.penbuvt.ca">penbuvt.ca</a>
  </footer>
</div>

<style lang="scss">
  .schedule {
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    background-color: #729fcf;
    background-image: linear-gradient(
      119.358deg, /* atan(1080 / 1920) + 90deg */
      #729fcf,
      #729fcf,
      #8ae23480
    );

    font-size: 1.5em;
    font-family: "DejaVu Sans", sans-serif;

    --ButtonAlternateFace: #babdb6;
    --ButtonDkShadow: #000000;
    --ButtonFace: #d3d7cf;
    --ButtonHilight: #eaece8;
    --ButtonLight: #ffffff;
    --ButtonShadow: #888a85;
    --ButtonText: #000000;
    --ActiveBorder: #d3d7cf;
    --AppWorkspace: #888a85;
    --Background: #729fcf;
    --InactiveBorder: #d3d7cf;
    --Scrollbar: #eaece8;
    --Window: #ffffff;
    --WindowFrame: #000000;
    --WindowText: #000000;
    --ActiveTitle: #204a87;
    --GradientActiveTitle: #498e4e;
    --GradientInactiveTitle: #3465a4;
    --InactiveTitle: #204a87;
    --InactiveTitleText: #d3d7cf;
    --TitleText: #ffffff;
    --Menu: #d3d7cf;
    --MenuBar: #d3d7cf;
    --MenuHilight: #204a87;
    --MenuText: #000000;
    --GrayText: #888a85;
    --Hilight: #204a87;
    --HilightText: #ffffff;
    --HotTrackingColor: #204a87;
    --InfoText: #000000;
    --InfoWindow: #ffffbb;
  }

  .schedule a {
    color: inherit;
    text-decoration: none;
  }
  .schedule a:hover,
  .schedule a:focus {
    color: var(--HotTrackingColor);
    text-decoration: underline;
  }

  .schedule-contents {
    flex-grow: 1;

    display: flex;
    overflow: auto;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }

  .schedule-contents > * {
    flex: 1 1 0;
  }

  .schedule-info {
    margin: auto 0;
    text-align: center;
    min-width: 50%;
    padding: 1em;
    min-width: 15em;
  }

  .schedule-info .logo {
    font-size: inherit;
  }

  .schedule-info .logo-image {
    max-width: 100%;
    max-height: 6em;
    height: auto;
  }

  .schedule-events {
    display: flex;
    padding: 0 1em;
    min-width: 66.667%;
    flex-direction: column;
    justify-content: space-evenly;
  }

  .schedule-events > hr {
    width: 100%;
  }


  .schedule footer {
    display: flex;
    padding: 1ex;
    flex-wrap: wrap;
    justify-content: space-between;
    font-size: smaller;
  }

  .schedule footer .social-icon {
    width: 1em;
    height: auto;
    vertical-align: middle;
  }
</style>
