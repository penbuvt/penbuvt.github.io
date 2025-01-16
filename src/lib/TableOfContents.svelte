<script lang="ts">
  export let headings = {};

  $: orderedHeadings = Object.values(headings ?? {});
</script>

{#if orderedHeadings.length}
  <div class="toc">
    <ol>
    {#each orderedHeadings as heading (heading.id)}
      <li><a href="#{heading.id}">{heading.text}</a></li>
    {/each}
    </ol>
  </div>
{/if}
