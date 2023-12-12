import { getRandomSign } from '../src/randomizer.js';

test('should return a math operator', () => {
  expect(getRandomSign(1)).toBe('+');
  expect(getRandomSign(2)).toBe('-');
  expect(getRandomSign(3)).toBe('*');
  expect(getRandomSign(7)).toBe(null);
});
