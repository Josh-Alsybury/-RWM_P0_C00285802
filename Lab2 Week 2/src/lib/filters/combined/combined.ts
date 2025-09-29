// src/lib/combined/combined.ts

import { modulo3Array as myModulo3 } from '$lib/filters/modulo3';
// Import your peer's filter from their package root
import { sortNum } from 'peer-filter-c87654321/src/lib/filters/sort'; // <-- replace with their actual export name

export function combinedFilter(xs: number[]): number[] {
  const afterMine = myModulo3(xs); // apply YOUR modulo3 filter first
  return sortNum(afterMine); // then apply your peer's filter
}
