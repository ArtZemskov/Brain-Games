import { getRandomInteger } from '../randomizer.js';
import getGameLogic from '../index.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

export const getGcd = (num1, num2) => (num1 % num2 === 0 ? num2 : getGcd(num2, num1 % num2));

export const getQuestionAndAnswer = () => {
  const firstNum = getRandomInteger(minNumber, maxNumber);
  const secondNum = getRandomInteger(minNumber, maxNumber);
  const question = `${firstNum} ${secondNum}`;
  const answer = `${getGcd(firstNum, secondNum)}`;
  return [question, answer];
};

const startGcdGame = () => getGameLogic(taskDescription, getQuestionAndAnswer);

export default startGcdGame;
