import readlineSync from 'readline-sync';

let userName;
let userAnswer;

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
};

export const interactive = (randomValue) => {
  console.log(`Question: ${randomValue}`);
  userAnswer = readlineSync.question('Your answer: ');
};

export const result = (correctAnswer) => {
  if (correctAnswer === userAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
  return false;
};

export const farewell = () => console.log(`Congratulations, ${userName}!`);
