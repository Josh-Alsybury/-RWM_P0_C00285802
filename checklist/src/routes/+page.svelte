<script lang="ts">
  import ChecklistItem from '$lib/ChecklistItem.svelte';

  let items = [
    { id: 1, label: 'Write tests', done: false },
    { id: 2, label: 'Create page', done: false }
  ];

  function handleChange(event: CustomEvent<{ id: number; done: boolean }>) {
    const { id, done } = event.detail;
    const item = items.find(i => i.id === id);
    if (item) item.done = done;
  }
</script>

<h1 data-testid="title">Progress Checklist</h1>

<!-- test one item -->
<ChecklistItem id={1} label="Test item" done={false} />

<!-- or render all items -->
{#each items as item (item.id)}
  <ChecklistItem {...item} on:change={handleChange} />
{/each}

<p>{items.filter(i => i.done).length} of {items.length} done</p>
