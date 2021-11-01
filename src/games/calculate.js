import { cons } from '@hexlet/pairs';
import playGame from '../index.js';
import { getRandomInt, getRandomSign } from '../random.js';

const description = 'What is the result of the expression?';

const getGameAnswerAndQuestion = () => {
  const firstNum = getRandomInt(1, 50);
  const secondNum = getRandomInt(1, 50);
  const sign = getRandomSign();
  const question = `${firstNum} ${sign} ${secondNum}`;
  let correctAnswer = 0;

  switch (sign) {
    case '-':
      correctAnswer = firstNum - secondNum;
      break;
    case '+':
      correctAnswer = firstNum + secondNum;
      break;
    default:
      correctAnswer = firstNum * secondNum;
      break;
  }

  return cons(question, correctAnswer);
};

export default () => playGame(description, getGameAnswerAndQuestion);
