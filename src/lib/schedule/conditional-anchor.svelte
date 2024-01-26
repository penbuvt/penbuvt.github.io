<script lang="ts">
  export let href;
</script>

{#if href}
  <a {...$$props}>
    <slot />
  </a>
{:else}
  <slot />
{/if}
