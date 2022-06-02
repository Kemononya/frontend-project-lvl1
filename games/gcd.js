import * as index from '../src/index.js';

const gcd = (num1, num2) => {
  const divisors1 = [];
  const commonDivisors = [];

  for (let i = 1; i <= num1; i += 1) {
    if (num1 % i === 0) {
      divisors1.push(i);
    }
  }

  for (let i = 1; i <= num2; i += 1) {
    if (num2 % i === 0 && divisors1.includes(i)) {
      commonDivisors.push(i);
    }
  }
  return commonDivisors.pop();
};

export default () => {
  index.greetings();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100 + 1);
    const randomNumber2 = Math.floor(Math.random() * 100 + 1);
    const correctAnswer = gcd(randomNumber1, randomNumber2).toString();

    index.interactive(`${randomNumber1} ${randomNumber2}`);

    if (!index.result(correctAnswer)) {
      return;
    }
  }

  index.farewell();
};
