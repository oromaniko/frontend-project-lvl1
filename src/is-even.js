import readlineSync from 'readline-sync';

const isEven = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 3; i > 0; i -= 1) {
    const number = Math.floor(Math.random() * 101);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');

    let correctAnswer = 'yes';
    if (number % 2 !== 0) {
      correctAnswer = 'no';
    }

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

export default isEven;
