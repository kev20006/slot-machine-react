/* eslint-disable no-undef */
import genSymbol from '../js/components/logic/genRandomSymbol';
import logic from '../js/components/logic/logicWrapper';

const [hasWon, rowTotal] = logic;
// helper function to total up the results of x random generations
const countOccurences = number => {
  const testResults = [0, 0, 0, 0];

  for (let i = 0; i <= number; i += 1) {
    const { symbol } = genSymbol();
    switch (symbol) {
      case 'A':
        testResults[0] += 1;
        break;
      case 'B':
        testResults[1] += 1;
        break;
      case 'P':
        testResults[2] += 1;
        break;
      case '*':
        testResults[3] += 1;
        break;
      default:
        break;
    }
  }
  return testResults;
};

it('it generates a random symbol from [p, a ,b or *]', () => {
  // test correct symbols are being generated
  const symbolObject = genSymbol();
  const { symbol, coefficient } = symbolObject;
  expect(symbol === 'A' || symbol === 'B' || symbol === 'P' || symbol === '*').toBeTruthy();
  switch (symbol) {
    case 'A':
      expect(coefficient).toBe(4);
      break;
    case 'B':
      expect(coefficient).toBe(6);
      break;
    case 'P':
      expect(coefficient).toBe(8);
      break;
    case '*':
      expect(coefficient).toBe(0);
      break;
    default:
      break;
  }
});

it('Testing the Odds', () => {
  const [A, B, P, star] = countOccurences(100000);
  expect(Math.ceil(A / 1000)).toBeGreaterThanOrEqual(45);
  expect(Math.ceil(A / 1000)).toBeLessThanOrEqual(46);
  expect(Math.ceil(B / 1000)).toBeGreaterThanOrEqual(35);
  expect(Math.ceil(B / 1000)).toBeLessThanOrEqual(36);
  expect(Math.ceil(P / 1000)).toBeGreaterThanOrEqual(15);
  expect(Math.ceil(P / 1000)).toBeLessThanOrEqual(16);
  expect(Math.ceil(star / 1000)).toBeGreaterThanOrEqual(5);
  expect(Math.ceil(star / 1000)).toBeLessThanOrEqual(6);
});

it('testing that win condition correctly resolve', () => {
  // test no matched symbols
  expect(hasWon([{ symbol: 'A' }, { symbol: '*' }, { symbol: 'B' }])).toBe(false);
  expect(hasWon([{ symbol: 'A' }, { symbol: 'B' }, { symbol: 'P' }])).toBe(false);
  // test 3 of a kind compleete win conditions
  expect(hasWon([{ symbol: 'A' }, { symbol: 'A' }, { symbol: 'A' }])).toBe(true);
  expect(hasWon([{ symbol: 'B' }, { symbol: 'B' }, { symbol: 'B' }])).toBe(true);
  expect(hasWon([{ symbol: 'P' }, { symbol: 'P' }, { symbol: 'P' }])).toBe(true);
  // test 2 of a kind and a wildcard
  expect(hasWon([{ symbol: 'P' }, { symbol: 'P' }, { symbol: '*' }])).toBe(true);
  // test 1 symbol and 2 wildcards
  expect(hasWon([{ symbol: 'P' }, { symbol: '*' }, { symbol: '*' }])).toBe(true);
});

it('testing prize totals are correctly added', () => {
  expect(
    rowTotal([
      { symbol: '*', coefficient: 0 },
      { symbol: 'P', coefficient: 8 },
      { symbol: '*', coefficient: 0 }
    ])
  ).toBe(8);
  expect(
    rowTotal([
      { symbol: 'A', coefficient: 4 },
      { symbol: 'A', coefficient: 4 },
      { symbol: 'A', coefficient: 4 }
    ])
  ).toBe(12);
  expect(
    rowTotal([
      { symbol: 'B', coefficient: 6 },
      { symbol: 'B', coefficient: 6 },
      { symbol: 'B', coefficient: 6 }
    ])
  ).toBe(18);
  expect(
    rowTotal([
      { symbol: 'P', coefficient: 8 },
      { symbol: 'P', coefficient: 8 },
      { symbol: 'P', coefficient: 8 }
    ])
  ).toBe(24);
});
