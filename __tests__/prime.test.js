import { isPrime, getQuestionAndAnswer } from '../src/games/prime.js';

test('should return true or false', () => {
  expect(isPrime(7)).toBe(true);
  expect(isPrime(3)).toBe(true);
  expect(isPrime(16)).toBe(false);
  expect(isPrime(1)).toBe(false);
});

test('should return a number for question', () => {
  const [question] = getQuestionAndAnswer();
  expect(typeof question).toBe('number');
});

test('should return correct answer "yes" or "no"', () => {
  const [, answer] = getQuestionAndAnswer();
  expect(answer).toMatch(/^(yes|no)$/);
});
