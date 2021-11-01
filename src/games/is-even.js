import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import { getRandomInt } from '../random.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const getGameAnswerAndQuestion = () => {
  const question = getRandomInt(1, 100);
  const answer = isEven(question);
  return cons(question, answer);
};

export default () => playGame(description, getGameAnswerAndQuestion);
