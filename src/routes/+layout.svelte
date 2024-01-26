<slot />

<style lang="scss">
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
</style>
