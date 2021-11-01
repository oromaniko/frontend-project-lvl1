import readlineSync from 'readline-sync';
import { car, cdr } from '@hexlet/pairs';

const roundsCount = 3;

const playGame = (description, getGameAnswerAndQuestion) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(description);

  for (let i = roundsCount; i > 0; i -= 1) {
    const answerAndQuestion = getGameAnswerAndQuestion();
    const question = car(answerAndQuestion);
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = String(cdr(answerAndQuestion));

    if (answer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }

    if (i === 1) {
      console.log(`Congratulations, ${userName}!`);
    }
  }
};

export default playGame;
