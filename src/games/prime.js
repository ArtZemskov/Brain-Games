import { getRandomInteger } from '../randomizer.js';
import getGameLogic from '../index.js';
import { isEven } from './even.js';

const taskDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export const isPrime = (num) => {
  if (num === 1) return false;
  if (isEven(num) && num !== 2) return false;
  if (num % 3 === 0 && num !== 3) return false;
  return true;
};

export const getQuestionAndAnswer = () => {
  const randomNum = getRandomInteger(1, 100);
  const question = randomNum;
  const answer = isPrime(randomNum) ? 'yes' : 'no';
  return [question, answer];
};

const startPrimeGame = () => getGameLogic(taskDescription, getQuestionAndAnswer);

export default startPrimeGame;
