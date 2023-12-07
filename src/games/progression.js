import getRandomInteger from '../randomizer.js';
import getGameLogic from '../index.js';

const taskDescription = 'What number is missing in the progression?';

const getProgression = (startNum, stepNum) => {
  const progressionSize = 10; // the number of elements of the progression
  const end = startNum + stepNum * progressionSize;
  const progression = [];
  for (let i = startNum; i < end; i += stepNum) {
    progression.push(i);
  }
  return progression;
};

const getQuestionAndAnswer = () => {
  const start = getRandomInteger(1, 50);
  const step = getRandomInteger(2, 5);
  const progression = getProgression(start, step);
  const randomIndex = Math.floor(Math.random() * progression.length);
  const answer = `${progression[randomIndex]}`;
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

const startProgressionGame = () => getGameLogic(taskDescription, getQuestionAndAnswer);

export default startProgressionGame;
