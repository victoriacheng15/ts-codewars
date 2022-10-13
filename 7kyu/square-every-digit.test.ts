import { describe, expect, it } from '@jest/globals';

export class Kata {
  static squareDigits(num: number): number {
    return Number([...`${num}`].map((val) => Number(val) ** 2).join(''));
  }
}

describe('square every digit', () => {
  const cases: [number, number][] = [
    [9119, 811181],
    [0, 0],
  ];

  for (const [n, output] of cases) {
    it(`should return ${output} when n = ${n}`, () => {
      expect(Kata.squareDigits(n)).toBe(output);
    });
  }
});
