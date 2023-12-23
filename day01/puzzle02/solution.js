const fs = require('node:fs');

const getCalibrationValue = (string) => {
  const numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  const words = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];

  const foundWords = words.filter((word) => string.includes(word));

  let i = 0;
  let numberWord = '';

  const foundANumber = (i) => {
    if (numerals.includes(string[i])) {
      return true;
    } else {
      let condition = false;
      foundWords.forEach((word) => {
        if (string.slice(i, i + word.length) === word) {
          numberWord = word;
          condition = true;
        }
      });
      return condition;
    }
  };

  while (!foundANumber(i)) {
    i++;
  }

  const firstNum = numerals.includes(string[i])
    ? string[i]
    : (words.indexOf(numberWord) + 1).toString();

  let j = string.length;

  const foundANumberReverse = (j) => {
    if (numerals.includes(string[j])) {
      return true;
    } else {
      let condition = false;
      foundWords.forEach((word) => {
        if (string.slice(j - word.length, j) === word) {
          console.log(word);
          numberWord = word;
          condition = true;
        }
      });
      return condition;
    }
  };

  while (!foundANumberReverse(j)) {
    j--;
  }
  const secondNum = numerals.includes(string[j])
    ? string[j]
    : (words.indexOf(numberWord) + 1).toString();
  console.log(foundWords);
  return parseInt(firstNum + secondNum);
};

const input = fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  data = data.split(/\r\n|\r|\n/);
  let sum = 0;
  data.forEach((line) => {
    sum += getCalibrationValue(line);
    console.log(sum, line);
  });
});

// I'm not gonna bother making this prettier -- it works
