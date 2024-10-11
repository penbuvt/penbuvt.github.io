<script>
  import NavHeader from '$lib/NavHeader.svelte';
</script>

<NavHeader />
<div class="content">
  <slot />
</div>

<style lang="scss">
  .content {
    padding: 1em 2em;
  }
</style>
