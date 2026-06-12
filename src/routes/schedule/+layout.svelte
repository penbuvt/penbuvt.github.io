<script lang="ts">
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

{@render children?.()}

<style lang="scss">
  :global(html),
  :global(body) {
    margin: 0;
    width: 100%;
    height: 100%;
  }
</style>
