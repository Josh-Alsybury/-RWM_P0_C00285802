<script lang="ts">
  import { createEventDispatcher } from 'svelte';

  export let id: number;
  export let label: string;
  export let done: boolean = false;

  const dispatch = createEventDispatcher<{ change: { id: number; done: boolean } }>();

  function toggle(event: Event) {
    const input = event.target as HTMLInputElement;
    done = input.checked;
    dispatch('change', { id, done });
  }
</script>

<label style="display: block; margin-bottom: 0.5rem;">
  <input type="checkbox" checked={done} on:change={toggle} />
  {label}
</label>
