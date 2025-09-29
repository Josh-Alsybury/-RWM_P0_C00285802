
<p>
  <a href="/" style="font-weight: bold; text-decoration: underline;">
    ← Back to Home
  </a>
</p>

<script lang="ts">
  import { cubes, modulo3Array } from '$lib/filters';
  import { combinedFilter } from '$lib/filters/combined/combined';

  let cubeRaw = '1 3 5 7 9 999';
  $: cubeInput = cubeRaw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: cubeOutput = cubes(cubeInput);

  let mod3Raw = '7 2 8 3 9 4 10 5 11 6';
  $: mod3Input = mod3Raw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: mod3Output = modulo3Array(mod3Input);

  let combinedRaw = '1 3 5 7 9';
  $: combinedInput = combinedRaw.trim().split(/\s+/).filter(Boolean).map(Number);
  $: combinedOutput = combinedFilter(combinedInput);
</script>

<h1>Sequence Filter Demo</h1>

<h2>Combined Filter</h2>
<label>
  Input (space-separated integers)
  <input bind:value={combinedRaw} placeholder="e.g., 1 3 5 7 9" />
</label>
<p>Output: {combinedOutput.join(' ')}</p>

<style>
  label { display: block; margin: 1rem 0; }
  input { width: 100%; max-width: 30rem; }
  h2 { margin-top: 2rem; }
</style>
