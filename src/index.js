import readlineSync from 'readline-sync';

const playGame = (description, makeExpression, gameFunction) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(description);

  for (let i = 3; i > 0; i -= 1) {
    const expession = makeExpression();
    console.log(`Question: ${expession}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = gameFunction(expession);

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
