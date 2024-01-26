<slot />

<style lang="scss">
  // Global border-box
  :global(html) {
    box-sizing: border-box;
  }
  :global(*, *:before, *:after) {
    box-sizing: inherit;
  }

  :global(html),
  :global(body) {
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
