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
  <hgroup id="title-header" class="title-header">
    <h3 id="title" class="title"></h3>
  </hgroup>
  <div id="content" class="content">
    <p id="local-time" class="event-start"><span class="time-label">Local:</span> </p>
    <p id="utc-time" class="event-start"><span class="time-label">UTC:</span> </p>
  </div>
</div>
`);
      this.postTemplate = createTemplateFromString(`
<div id="post" class="post">
  <h3 id="title" class="title"></h3>
  <div id="content" class="content"></div>
</div>
`);
      this.defaultDuration = 2.5 * 60 * 60 * 1000; // 2.5 hours
    }

    render(mountPoint, data) {
      const template = this.mainTemplate.content.cloneNode(true);

      template.getElementById('title').textContent = data.title;

      const eventsContainer = template.getElementById('schedule-events');

      const renderedEvents = data.events.map((event) => (
        {
          stream: () => this.renderEvent(event),
          premiere: () => this.renderEvent(event),
          video: () => this.renderEvent(event),
          post: () => this.renderPost(event),
          separator: () => document.createElement('hr'),
        }[event.type]?.() ?? ''
      ));
      eventsContainer.append(...renderedEvents);

      mountPoint.replaceChildren(template);
    }

    renderEvent({
      id,
      title,
      subtitle,
      url,
      otherUrls = [],
      datetime,
      duration = this.defaultDuration,
      tags = [],
    }) {
      const eventFragment = this.eventTemplate.content.cloneNode(true);

      const eventElement = eventFragment.getElementById('event');
      eventElement.id = id;
      eventElement.classList.add(...tags);

      const locationsElement = eventFragment.getElementById('locations');
      locationsElement.id = 'locations-' + id;

      // locations
      [url, ...otherUrls].filter(Boolean).map((u) => {
        const parsedUrl = new URL(u);

        switch (parsedUrl.hostname) {
          case 'www.youtube.com':
            return {
              text: parsedUrl.pathname.startsWith('/@')
                // Assume user YouTube URL: https://www.youtube.com/@<user>
                ? parsedUrl.pathname.split('/')[1]
                // Assume full YouTube URL: https://www.youtube.com/watch?v=<video-id>
                : parsedUrl.searchParams.get('v'),
              icon: '/images/social-icons/youtube.svg',
              alt: 'YT',
            };
          case 'www.twitch.tv':
            // Assume full Twitch user URL: https://www.twitch.tv/<user>
            return {
              text: parsedUrl.pathname.split('/')[1],
              icon: '/images/social-icons/twitch.svg',
              alt: 'TTV',
            };
          case 'discord.gg':
            return {
              text: parsedUrl.pathname.split('/')[1],
              icon: '/images/social-icons/discord.svg',
              alt: 'Discord',
            };
        }
      }).forEach(({ text, icon, alt }) => {
        const socialIcon = document.createElement('img');
        socialIcon.width = 16;
        socialIcon.height = 16;

        // Assume full Twitch user URL: https://www.twitch.tv/<user>
        // TODO: support other services
        socialIcon.src = icon;
        socialIcon.alt = alt;

        const videoIdElement = document.createElement('span');
        videoIdElement.classList.add('video-id');
        videoIdElement.append(socialIcon, ' ', text);
        locationsElement.append(videoIdElement);
      });

      const titleHeaderElement = eventFragment.getElementById('title-header');
      titleHeaderElement.id = 'title-header-' + id;

      const titleElement = eventFragment.getElementById('title');
      titleElement.id = 'title-' + id;
      titleElement.textContent = title;

      if (subtitle) {
        const subtitleElement = document.createElement('p');
        subtitleElement.id = 'subtitle-' + id;
        subtitleElement.className = 'subtitle';
        subtitleElement.textContent = subtitle;

        titleHeaderElement.appendChild(subtitleElement);
      }

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

      const now = Date.now();
      const startTimestamp = date.getTime();
      if (now < startTimestamp) {
        eventElement.classList.add('upcoming');
      } else if (now < startTimestamp + duration) {
        eventElement.classList.add('livenow');
      } else {
        eventElement.classList.add('past');
      }

      if (url) {
        const link = document.createElement('a');
        link.href = url;
        link.append(eventFragment);

        return link;
      } else {
        return eventFragment;
      }
    }

    renderPost({
      id,
      title,
      body,
      tags = [],
    }) {
      const postFragment = this.postTemplate.content.cloneNode(true);

      const postElement = postFragment.getElementById('post');
      postElement.id = id;
      postElement.classList.add(...tags);

      const titleElement = postFragment.getElementById('title');
      titleElement.id = 'title-' + id;
      titleElement.textContent = title;

      const contentElement = postFragment.getElementById('content');
      contentElement.id = 'content-' + id;
      const bodyParagraph = document.createElement('p');
      bodyParagraph.textContent = body;
      contentElement.appendChild(bodyParagraph);

      return postFragment;
    }
  }

  function createTemplateFromString(html) {
    const template = document.createElement('template');
    template.innerHTML = html;
    return template;
  }

  globalThis.PenbuNotifScheduleTemplate = PenbuNotifScheduleTemplate;
}
