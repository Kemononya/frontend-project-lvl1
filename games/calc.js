import * as index from '../src/index.js';

export default () => {
  index.greetings();
  console.log('What is the result of the expression?');

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber1 = Math.floor(Math.random() * 100);
    const randomNumber2 = Math.floor(Math.random() * 100);
    const questions = [
      `${randomNumber1} + ${randomNumber2}`,
      `${randomNumber1} - ${randomNumber2}`,
      `${randomNumber1} * ${randomNumber2}`,
    ];
    const correctAnswers = [
      (randomNumber1 + randomNumber2).toString(),
      (randomNumber1 - randomNumber2).toString(),
      (randomNumber1 * randomNumber2).toString(),
    ];
    const randomSymbol = Math.floor(Math.random() * 3);

    index.interactive(questions[randomSymbol]);

    if (!index.result(correctAnswers[randomSymbol])) {
      return;
    }
  }

  index.farewell();
};
