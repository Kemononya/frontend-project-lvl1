import * as index from '../src/index.js';

const task = () => console.log('What is the result of the expression?');

export default () => {
  index.greetings();
  task();

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const questions = [
      `${randomNumber1} + ${randomNumber2}`,
      `${randomNumber1} - ${randomNumber2}`,
      `${randomNumber1} * ${randomNumber2}`,
    ];
    const correctAnswers = [
      (randomNumber1 + randomNumber2),
      (randomNumber1 - randomNumber2),
      (randomNumber1 * randomNumber2),
    ];
    const randomSymbol = Math.floor(Math.random() * 3);

    index.interactive(questions[randomSymbol]);

    if (!index.result(correctAnswers[randomSymbol].toString())) {
      return;
    }
  }

  index.farewell();
};
