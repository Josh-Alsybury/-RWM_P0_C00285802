<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://svelte.dev/docs/kit">svelte.dev/docs/kit</a> to read the documentation</p>

<script lang="ts">
  import { cubes,modulo3Array } from '$lib/filters';
  let cubeRaw = '1 3 5 7 9 999';
  $: cubeInput = cubeRaw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: cubeOutput = cubes(cubeInput)

  let mod3Raw = '7 2 8 3 9 4 10 5 11 6';
  $: mod3Input = mod3Raw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: mod3Output = modulo3Array(mod3Input);

</script>

<h1>Sequence Filter Demo</h1>

<h2>Cubes Filter</h2>
<label>
  Input (space-separated integers)
  <input bind:value={cubeRaw} placeholder="e.g., 1 2 3 4" />
</label>
<p>Output: {cubeOutput.join(' ')}</p>

<h2>Modulo 3 Filter</h2>
<label>
  Input (space-separated integers)
  <input bind:value={mod3Raw} placeholder="e.g., 7 2 8 3 ..." />
</label>
<p>Output: {mod3Output.join(' ')}</p>

<style>
  label { display: block; margin: 1rem 0; }
  input { width: 100%; max-width: 30rem; }
  h2 { margin-top: 2rem; }
</style>
