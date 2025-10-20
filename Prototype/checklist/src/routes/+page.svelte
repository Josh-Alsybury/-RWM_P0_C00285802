<script lang="ts">
  import ChecklistItem from '$lib/ChecklistItem.svelte';

  // The "live" internal state
  let items = [
    { id: 1, label: 'Write tests', done: false },
    { id: 2, label: 'Create page', done: false },
    { id: 3, label: 'Deploy app', done: false },
    { id: 4, label: 'Write docs', done: false },
    { id: 5, label: 'Review PR', done: false }
  ];

  // Progress only updated on submit
  let submittedDone = 0;

  function handleChange(event: CustomEvent<{ id: number; done: boolean }>) {
    const { id, done } = event.detail;
    const item = items.find(i => i.id === id);
    if (item) item.done = done;
  }

  function handleSubmit() {
    submittedDone = items.filter(i => i.done).length;
  }

  $: total = items.length;
  $: percent = total ? Math.round((submittedDone / total) * 100) : 0;
</script>

<h1>Checklist Submit Gate</h1>

{#each items as item (item.id)}
  <ChecklistItem {...item} on:change={handleChange} />
{/each}

<p>Progress: {submittedDone}/{total} ({percent}%)</p>

<button on:click={handleSubmit}>Submit version</button>
