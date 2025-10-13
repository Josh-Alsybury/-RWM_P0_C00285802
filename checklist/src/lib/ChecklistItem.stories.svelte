<script>
  import { Meta, Story } from '@storybook/addon-svelte-csf';
  import ChecklistItem from './ChecklistItem.svelte';

  const items = [
    { id: 1, label: 'Write tests', done: false },
    { id: 2, label: 'Create page', done: false },
    { id: 3, label: 'Deploy app', done: false },
    { id: 4, label: 'Write docs', done: false },
    { id: 5, label: 'Review PR', done: false }
  ];

  let submittedDone = 0;

  function handleChange(event) {
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

<Meta title="Pages/ChecklistPage" />

<Story name="Full Checklist">
  <h1>Checklist Submit Gate</h1>

  {#each items as item (item.id)}
    <ChecklistItem {...item} on:change={handleChange} />
  {/each}

  <!-- Progress Info -->
  <p>Progress: {submittedDone}/{total} ({percent}%)</p>

  <!-- Green Progress Bar -->
  <div style="background: #eee; border-radius: 8px; width: 100%; height: 20px; margin-bottom: 1rem;">
    <div
      style="
        width: {percent}%;
        background: linear-gradient(90deg, #4caf50, #81c784);
        height: 100%;
        border-radius: 8px;
        transition: width 0.3s ease;
      "
    ></div>
  </div>

  <button on:click={handleSubmit} style="padding: 0.5rem 1rem; font-size: 1rem;">
    Submit version
  </button>
</Story>
