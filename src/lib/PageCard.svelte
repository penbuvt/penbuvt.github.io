<script lang="ts">
  export let href: string;
  export let text: string;
  export let image: string;
  export let imageAlt: string;
</script>

<a {href}>
  <div class="card">
    <div class="image">
      <img src={image} alt={imageAlt} />
    </div>
    <div class="title">
      {text}
    </div>
  </div>
</a>

<style lang="scss">
  a:focus {
    outline: none;
  }

  .card { 
    display: inline-block;
    height: 100%;
    border: 2px solid var(--shadow-color);
    border-radius: 2ch;
    overflow: clip;
    transition: box-shadow 100ms;

    a:hover:not(:active) &,
    a:focus:not(:active) & {
      box-shadow: 0.5ex 0.5ex 1ex var(--shadow-color);
    }

    a:focus & {
      outline: 1px dotted currentColor;
    }

    //& > a {
    //  display: contents;
    //}

    .title {
      font-family: var(--header-font-family);
      font-size: larger;
      font-weight: bold;
      padding: 0.5em;

      a:not(:hover):not(:focus) & {
        color: var(--primary-text-color);
      }
    }
  }
</style>
