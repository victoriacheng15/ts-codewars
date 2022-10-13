import { describe, expect, it } from '@jest/globals';

// export class Challenge {
//   static solution(number: number) {
//     let sum = 0;
//     for (let i = 1; i < number; i += 1) {
//       if (i % 3 === 0 || i % 5 === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
// }

export class Challenge {
  static solution(number: number) {
    let [sum, num] = [0, number - 1];

    while (num > 0) {
      if (num % 3 === 0 || num % 5 === 0) {
        sum += num;
      }
      num -= 1;
    }

    return sum;
  }
}

describe('square every digit', () => {
  const cases: [number, number][] = [
    [10, 23],
    [20, 78],
    [200, 9168],
  ];

  for (const [n, output] of cases) {
    it(`should return ${output} when n = ${n}`, () => {
      expect(Challenge.solution(n)).toBe(output);
    });
  }
});
