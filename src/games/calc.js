import { getRandomInteger, getRandomElement } from '../randomizer.js';
import getGameLogic from '../index.js';

const taskDescription = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 25;
const signs = ['+', '-', '*'];

export const getCalc = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`unknown sign: ${sign}`);
  }
};

export const getQuestionAndAnswer = () => {
  const firstNum = getRandomInteger(minNumber, maxNumber);
  const secondNum = getRandomInteger(minNumber, maxNumber);
  const sign = getRandomElement(signs);
  const question = `${firstNum} ${sign} ${secondNum}`;
  const answer = `${getCalc(firstNum, secondNum, sign)}`;
  return [question, answer];
};

const startCalcGame = () => getGameLogic(taskDescription, getQuestionAndAnswer);

export default startCalcGame;
