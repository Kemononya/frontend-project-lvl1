import * as index from '../src/index.js';

const task = () => console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (num) => {
  if (num < 4) {
    return 'yes';
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

export default () => {
  index.greetings();
  task();

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 198 + 2);
    const correctAnswer = isPrime(randomNumber);

    index.interactive(randomNumber);

    if (!index.result(correctAnswer)) {
      return;
    }
  }

  index.farewell();
};
