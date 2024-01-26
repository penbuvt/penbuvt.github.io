<script lang="ts">
  export let event;

  const {
    id,
    title,
    url,
    otherUrls = [],
    datetime,
    tags = [],
  } = event;

  // Dates (local, UTC)

  const date = new Date(datetime);
</script>

<div {id} class="event {tags.join(" ")}">
  <div id="location-{id}" class="locations">
  </div>
  <h3 id="title-{id}" class="title">{title}</h3>
  <div id="content-{id}" class="content">
    <p class="event-start"><span class="time-label">Local:</span> <time dateTime={date.toISOString()}>{date.toString().replace('GMT', 'UTC')}</time></p>
    <p class="event-start"><span class="time-label">UTC:</span> <time dateTime={date.toISOString()}>{date.toUTCString().replace('GMT', 'UTC')}</time></p>
  </div>
</div>

<style lang="scss">
  .event {
    background-color: var(--InfoWindow);
    color: var(--InfoText);
    padding: 1ex;
    border: 2px ridge var(--ButtonFace);
    border-radius: 8px;
    box-shadow: 8px 8px 8px 0 #55575380;
    margin: 0 8px 8px 0;
    overflow: hidden;
  }

  .event.preview {
    border-style: dashed;
    opacity: 0.8;
  }

  .title {
    font-weight: bold;
    margin: 0;
  }

  .content {
    display: table;
    height: auto;
    margin: 0;
    padding: 0;
  }

  .content > * {
    display: table-row;
  }

  .content > * > * {
    display: table-cell;
  }

  .content > * > * + * {
    padding-left: 1ex;
  }

  .content p {
    margin: 0;
  }

  .content .event-start {
    font-size: smaller;
  }

  .content .time-label {
    text-align: right;
  }
</style>
