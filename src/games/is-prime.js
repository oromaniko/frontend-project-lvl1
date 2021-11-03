import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import { getRandomInt } from '../random.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) return false;

  for (let div = 2; div <= num / 2; div += 1) {
    if (num % div === 0) return false;
  }

  return true;
};

const getGameAnswerAndQuestion = () => {
  const question = getRandomInt(1, 101);
  const answer = isPrime(question) === true ? 'yes' : 'no';
  return cons(question, answer);
};

export default () => playGame(description, getGameAnswerAndQuestion);
