import * as index from '../src/index.js';

const task = () => console.log('Find the greatest common divisor of given numbers.');

const gd = (num) => {
  const divisors1 = [];

  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      divisors1.push(i);
    }
  }
  return divisors1;
};

const gcd = (num1, num2) => {
  const commonDivisors = [];

  for (let i = 1; i <= num2; i += 1) {
    if (num2 % i === 0 && gd(num1).includes(i)) {
      commonDivisors.push(i);
    }
  }
  return commonDivisors.pop();
};

export default () => {
  index.greetings();
  task();

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100 + 1);
    const randomNumber2 = Math.floor(Math.random() * 100 + 1);
    const correctAnswer = gcd(randomNumber1, randomNumber2);

    index.interactive(`${randomNumber1} ${randomNumber2}`);

    if (!index.result(correctAnswer.toString())) {
      return;
    }
  }

  index.farewell();
};
