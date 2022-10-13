import { describe, expect, it } from '@jest/globals';

export function even_or_odd(n: number): string {
  return n % 2 === 0 ? 'Even' : 'Odd';
}

describe('even or odd', () => {
  const cases: [number, string][] = [
    [2, 'Even'],
    [0, 'Even'],
    [7, 'Odd'],
    [-4, 'Even'],
  ];

  for (const [n, output] of cases) {
    it(`should return ${output} when n = ${n}`, () => {
      expect(even_or_odd(n)).toBe(output);
    });
  }
});
