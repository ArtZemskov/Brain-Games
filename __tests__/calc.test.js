import { getCalc, getQuestionAndAnswer } from '../src/games/calc';

test('should return the calculation results', () => {
  expect(getCalc(9, 11, '+')).toBe(20);
  expect(getCalc(8, 12, '-')).toBe(-4);
  expect(getCalc(4, 15, '*')).toBe(60);
});

test('should return a string for question and answer', () => {
  const [question, answer] = getQuestionAndAnswer();
  expect(typeof question).toBe('string');
  expect(typeof answer).toBe('string');
});
