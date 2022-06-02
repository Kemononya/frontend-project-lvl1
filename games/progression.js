import * as index from '../src/index.js';

const task = () => console.log('What number is missing in the progression?');

const randomProgression = () => {
  const step = Math.floor(Math.random() * 10 + 1);
  let firstNumber = Math.floor(Math.random() * 20 + 1);
  const progression = [firstNumber];

  for (let i = 1; i < 10; i += 1) {
    progression.push(firstNumber += step);
  }
  return progression;
};

const hide = (progress, hideItemNumber) => {
  let result = '';

  for (let i = 0; i < 10; i += 1) {
    if (i === hideItemNumber) {
      result += '.. ';
    } else {
      result += `${progress[i]} `;
    }
  }
  return result;
};

export default () => {
  index.greetings();
  task();

  for (let i = 1; i <= 3; i += 1) {
    const fullProgression = randomProgression();
    const hideItem = Math.floor(Math.random() * 10);
    const hideProgression = hide(fullProgression, hideItem);

    index.interactive(hideProgression);

    if (!index.result(fullProgression[hideItem].toString())) {
      return;
    }
  }

  index.farewell();
};
