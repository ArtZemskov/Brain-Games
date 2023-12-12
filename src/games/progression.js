import { getRandomInteger } from '../randomizer.js';
import getGameLogic from '../index.js';

const taskDescription = 'What number is missing in the progression?';
const firstNum = 1;
const secondNum = 50;
const stepStart = 2;
const stepEnd = 5;

export const getProgression = (startNum, stepNum) => {
  const progressionSize = 10; // the number of elements of the progression
  const end = startNum + stepNum * progressionSize;
  const progression = [];
  for (let i = startNum; i < end; i += stepNum) {
    progression.push(i);
  }
  return progression;
};

export const getQuestionAndAnswer = () => {
  const start = getRandomInteger(firstNum, secondNum);
  const step = getRandomInteger(stepStart, stepEnd);
  const progression = getProgression(start, step);
  const randomIndex = getRandomInteger(0, progression.length - 1);
  const answer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startProgressionGame = () => getGameLogic(taskDescription, getQuestionAndAnswer);

export default startProgressionGame;
