const getRandomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const getRandomSign = (option) => {
  switch (option) {
    case 1:
      return '+';
    case 2:
      return '-';
    case 3:
      return '*';
    default:
      return null;
  }
};

export default getRandomInteger;
export { getRandomSign };
