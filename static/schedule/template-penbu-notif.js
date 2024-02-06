"use strict";

{
  class PenbuNotifScheduleTemplate {
    constructor() {
      this.mainTemplate = createTemplateFromString(`
<main class="schedule-contents">
  <div class="schedule-info">
    <h1 class="logo"><a href="/"><img src="/images/penbu-logo-gradient-large.png" alt="Penbu" class="logo-image" /></a></h1>
    <h2 id="title" class="logo"></h2>
    <p>See the latest at <a href="/schedule">penbuvt.ca/schedule</a></p>
  </div>
  <div id="schedule-events" class="schedule-events"></div>
</main>
<footer class="socials">
<a href="https://www.youtube.com/@PenbuVT"><img src="/images/social-icons/youtube.svg" alt="YouTube:" width="24" height="24" class="social-icon" /> @PenbuVT</a>
<a href="https://twitter.com/PenbuVT"><img src="/images/social-icons/x.svg" alt="X (Twitter):" width="24" height="24" class="social-icon" /> @PenbuVT</a>
<a href="https://discord.gg/X5XZDfBSPG"><img src="/images/social-icons/discord.svg" alt="Discord:" width="24" height="24" class="social-icon" /> discord.gg/X5XZDfBSPG</a>
<a href="https://www.penbuvt.ca">penbuvt.ca</a>
</footer>
`);
      this.eventTemplate = createTemplateFromString(`
<div id="event" class="event">
  <div id="locations" class="locations">
  </div>
  <h3 id="title" class="title"></h3>
  <div id="content" class="content">
    <p id="local-time" class="event-start"><span class="time-label">Local:</span> </p>
    <p id="utc-time" class="event-start"><span class="time-label">UTC:</span> </p>
  </div>
</div>
`);
    }

    render(mountPoint, data) {
      const template = this.mainTemplate.content.cloneNode(true);

      template.getElementById('title').textContent = data.title;

      const eventsContainer = template.getElementById('schedule-events');

      const renderedEvents = data.events.map((event) => (
        {
          stream: () => this.renderEvent(event),
          premiere: () => this.renderEvent(event),
          separator: () => document.createElement('hr'),
        }[event.type]?.() ?? ''
      ));
      eventsContainer.append(...renderedEvents);

      mountPoint.replaceChildren(template);
    }

    renderEvent({
      id,
      title,
      url,
      otherUrls = [],
      datetime,
      tags = [],
    }) {
      const eventFragment = this.eventTemplate.content.cloneNode(true);

      const eventElement = eventFragment.getElementById('event');
      eventElement.id = id;
      eventElement.classList.add(...tags);

      const locationsElement = eventFragment.getElementById('locations');
      locationsElement.id = 'locations-' + id;

      if (url) {
        const parsedUrl = new URL(url);

        const socialIcon = document.createElement('img');
        socialIcon.width = 16;
        socialIcon.height = 16;

        // Assume full YouTube URL: https://www.youtube.com/watch?v=<video-id>
        // TODO: support other services
        socialIcon.src = '/images/social-icons/youtube.svg';
        socialIcon.alt = 'YT:';

        const videoId = parsedUrl.searchParams.get('v');

        const videoIdElement = document.createElement('span');
        videoIdElement.classList.add('video-id');
        videoIdElement.append(socialIcon, ' ', videoId);
        locationsElement.append(videoIdElement);
      }

      otherUrls.forEach((otherUrl) => {
        const parsedUrl = new URL(otherUrl);

        const socialIcon = document.createElement('img');
        socialIcon.width = 16;
        socialIcon.height = 16;

        // Assume full Twitch user URL: https://www.twitch.tv/<user>
        // TODO: support other services
        socialIcon.src = '/images/social-icons/twitch.svg';
        socialIcon.alt = 'TTV:';

        const user = parsedUrl.pathname.split('/')[1];

        const videoIdElement = document.createElement('span');
        videoIdElement.classList.add('video-id');
        videoIdElement.append(socialIcon, ' ', user);
        locationsElement.append(videoIdElement);
      });

      const titleElement = eventFragment.getElementById('title');
      titleElement.id = 'title-' + id;
      titleElement.textContent = title;


      const contentElement = eventFragment.getElementById('content');
      contentElement.id = 'content-' + id;

      // Dates (local, UTC)

      const date = new Date(datetime);

      const localTimeContainer = eventFragment.getElementById('local-time');
      localTimeContainer.id = 'local-time-' + id;
      const localTimeElement = document.createElement('time');
      localTimeElement.dateTime = date.toISOString();
      localTimeElement.textContent = date.toString()
        .replace('GMT', 'UTC'); // willful violation of spec because "UTC" appears more competent
      localTimeContainer.append(localTimeElement);

      const utcTimeContainer = eventFragment.getElementById('utc-time');
      utcTimeContainer.id = 'utc-time-' + id;
      const utcTimeElement = document.createElement('time');
      utcTimeElement.dateTime = date.toISOString();
      utcTimeElement.textContent = date.toUTCString()
        .replace('GMT', 'UTC'); // similar to local time
      utcTimeContainer.append(utcTimeElement);

      contentElement.append(localTimeContainer, utcTimeContainer);

      if (url) {
        const link = document.createElement('a');
        link.href = url;
        link.append(eventFragment);

        return link;
      } else {
        return eventFragment;
      }
    }
  }

  function createTemplateFromString(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
  }

  globalThis.PenbuNotifScheduleTemplate = PenbuNotifScheduleTemplate;
}
