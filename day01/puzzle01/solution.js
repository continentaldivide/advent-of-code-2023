const fs = require('node:fs');

const getCalibrationValue = (string) => {
  const numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let i = 0;
  while (!numerals.includes(string[i])) {
    i++;
  }
  const firstNum = string[i];

  let j = string.length;
  while (!numerals.includes(string[j])) {
    j--;
  }
  const secondNum = string[j];

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

// above readFile "works," sort of -- it ends up spitting out the correct solution in the console, but I'm totally unfamiliar with fs methods and I've done something wrong with the callbacks here such that the program doesn't terminate.  futzed with it for a while to no avail so I'll move on for now, but would love to come back and wrap my head around this in the future.