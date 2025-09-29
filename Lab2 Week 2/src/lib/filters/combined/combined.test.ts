import { describe, it, expect } from 'vitest';
import { combinedFilter } from './combined';

function normalizeZeros(arr: number[]): number[] {
  return arr.map(n => Object.is(n, -0) ? 0 : n);
}

describe('combined (mine → peer)', () => {
  it('basic sequence', () => {
    const input = [1, 3, 5, 7, 9];
    // Update expected for your two filters & agreed order
    const expected = [0, 0, 1, 1, 2];
    expect(combinedFilter(input)).toEqual(expected);
  });

  it('edge cases', () => {
    // empty in empty out
    expect(normalizeZeros(combinedFilter([]))).toEqual([]);

    // single element
    expect(normalizeZeros(combinedFilter([5]))).toEqual([2]);

    // multiple zeros should stay zeros
    expect(normalizeZeros(combinedFilter([0, 0, 0]))).toEqual([0, 0, 0]);

    // negative numbers should sort correctly and normalize -0 → 0
    expect(normalizeZeros(combinedFilter([-1, -2, -3]))).toEqual([-2, -1, 0]);
  });
});