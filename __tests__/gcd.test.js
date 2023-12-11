import { getGcd, getQuestionAndAnswer } from '../src/games/gcd.js';

test('should return the great common divisor of two numbers', () => {
  expect(getGcd(25, 50)).toBe(25);
  expect(getGcd(94, 45)).toBe(1);
  expect(getGcd(56, 18)).toBe(2);
});

test('should return a string for question and answer', () => {
  const [question, answer] = getQuestionAndAnswer();
  expect(typeof question).toBe('string');
  expect(typeof answer).toBe('string');
});
