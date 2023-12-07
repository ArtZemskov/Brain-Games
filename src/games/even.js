import getRandomInteger from '../randomizer.js';
import getGameLogic from '../index.js';

const minNumber = 1;
const maxNumber = 100;
const taskDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

export const isEven = (randomNumber) => randomNumber % 2 === 0;

const getQuestionAndAnswer = () => {
  const question = getRandomInteger(minNumber, maxNumber);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

const startEvenGame = () => getGameLogic(taskDescription, getQuestionAndAnswer);

export default startEvenGame;
