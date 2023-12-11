import getRandomInteger from '../randomizer.js';
import getGameLogic from '../index.js';

const taskDescription = 'Find the greatest common divisor of given numbers.';
const minNumber = 1;
const maxNumber = 100;

export const getGcd = (num1, num2) => {
  const min = Math.min(num1, num2);
  const max = Math.max(num1, num2);
  let divisor = 0;
  for (let i = min; i >= 1; i -= 1) {
    divisor = i;
    if (min % divisor === 0 && max % divisor === 0) {
      return divisor;
    }
  }
  return divisor;
};

export const getQuestionAndAnswer = () => {
  const firstNum = getRandomInteger(minNumber, maxNumber);
  const secondNum = getRandomInteger(minNumber, maxNumber);
  const question = `${firstNum} ${secondNum}`;
  const answer = `${getGcd(firstNum, secondNum)}`;
  return [question, answer];
};

const startGcdGame = () => getGameLogic(taskDescription, getQuestionAndAnswer);

export default startGcdGame;
