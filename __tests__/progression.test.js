import { getProgression, getQuestionAndAnswer } from '../src/games/progression.js';

test('should return a progression array of 10 numbers', () => {
  expect(getProgression(5, 2)).toEqual([5, 7, 9, 11, 13, 15, 17, 19, 21, 23]);
  expect(getProgression(2, 3)).toEqual([2, 5, 8, 11, 14, 17, 20, 23, 26, 29]);
});

test('should return a string for question and answer', () => {
  const [question, answer] = getQuestionAndAnswer();
  expect(typeof question).toBe('string');
  expect(typeof answer).toBe('string');
});
