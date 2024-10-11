<slot />

<style lang="scss">
  @use 'sass:math';

  // Global border-box
  :global(html) {
    box-sizing: border-box;
  }
  :global(*, *:before, *:after) {
    box-sizing: inherit;
  }

  :global(body) {
    margin: 0;
  }

  :root {
    /* Primary theme color */
    --primary-color: #498E4E;
    /* Primary theme text color */
    --primary-text-color: #000000;
    --primary-text-color-over: #000;
    /* Primary theme link color */
    --primary-link-color: #204A87;
    /* Secondary color: the background body color */
    --secondary-color: #EEEEEC;
    --secondary-text-color: #2E3436;
    /* Highlight text color of table of content */
    --toc-highlight-text-color: #498E4E;
    --toc-background-color: white;
    --code-color: #4a4a4a;
    --code-background-color: white;

    --shadow-color: #BABDB6;

    /* Font used for headers (h1 & h2) */
    --header-font-family: "DejaVu Sans", sans-serif;
    /* Font used for text */
    --text-font-family: "DejaVu Sans", sans-serif;

    --brand-gradient: linear-gradient(
      #{math.atan(math.div(1080, 1920)) + 90deg,
        #729fcf,
        #729fcf,
        #8ae23480
      }
    );
  }
</style>
