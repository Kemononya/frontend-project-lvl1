import * as index from '../src/index.js';

const task = () => console.log('Answer "yes" if the number is even, otherwise answer "no".');

export default () => {
  index.greetings();
  task();

  for (let i = 1; i <= 3; i += 1) {
    const randomNumber = Math.floor(Math.random() * 100 + 1);
    const correctAnswer = randomNumber % 2 === 0 ? 'yes' : 'no';

    index.interactive(randomNumber);

    if (!index.result(correctAnswer)) {
      return;
    }
  }

  index.farewell();
};
