import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import { getRandomInt } from '../random.js';

const description = 'Find the greatest common divisor of given numbers.?';

const getGameAnswerAndQuestion = () => {
  const firstNum = getRandomInt(1, 100);
  const secondNum = getRandomInt(1, 100);
  const question = `${firstNum} ${secondNum}`;

  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  };

  const correctAnswer = gcd(firstNum, secondNum);

  return cons(question, correctAnswer);
};

export default () => playGame(description, getGameAnswerAndQuestion);
