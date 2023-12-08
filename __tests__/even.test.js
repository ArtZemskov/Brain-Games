import { isEven, getQuestionAndAnswer } from '../src/games/even.js';

test('should return true or false', () => {
  expect(isEven(6)).toBe(true);
  expect(isEven(0)).toBe(true);
  expect(isEven(7)).toBe(false);
});

test('should return a number for question', () => {
  const [question] = getQuestionAndAnswer();
  expect(typeof question).toBe('number');
});

test('should return correct answer "yes" or "no"', () => {
  const [, answer] = getQuestionAndAnswer();
  expect(answer).toMatch(/^(yes|no)$/);
});
