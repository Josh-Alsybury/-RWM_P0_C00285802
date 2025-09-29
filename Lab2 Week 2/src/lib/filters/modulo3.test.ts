// src/lib/filters/modulo3.test.ts
import { describe, it, expect } from 'vitest';
import { modulo3Array } from './modulo3';

describe('Modulo3 filter', () => {
  it('computes modulo 3 for a sequence', () => {
    const input = [7, 2, 8, 3, 9, 4, 10, 5, 11, 6];
    const expected = [1, 2, 2, 0, 0, 1, 1, 2, 2, 0];
    expect(modulo3Array(input)).toEqual(expected);
  });
});