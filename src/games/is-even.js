import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const makeRandom = () => Math.floor(Math.random() * 101);

const isEven = (num) => {
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

export default () => playGame(description, makeRandom, isEven);
