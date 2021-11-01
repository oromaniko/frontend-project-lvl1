import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import { getRandomInt } from '../random.js';

const description = 'What number is missing in the progression?';

const getGameAnswerAndQuestion = () => {
  const firstNum = getRandomInt(1, 30);
  const step = getRandomInt(1, 5);
  const progression = [];
  const progressionLength = 10;

  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstNum + step * i);
  }

  const index = getRandomInt(0, 9);
  const correctAnswer = progression[index];

  progression[index] = '..';
  const question = progression.join(' ');

  return cons(question, correctAnswer);
};

export default () => playGame(description, getGameAnswerAndQuestion);
