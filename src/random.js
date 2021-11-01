const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const getRandomSign = () => {
  const signs = ['+', '-', '*'];
  const index = getRandomInt(0, 2);
  return signs[index];
};

export { getRandomInt, getRandomSign };
