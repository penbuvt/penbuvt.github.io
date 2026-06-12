<script lang="ts">
  let { ...props } = $props();
</script>

{#if props.href}
  <a {...props}>
    {@render props.children?.()}
  </a>
{:else}
  {@render props.children?.()}
{/if}
