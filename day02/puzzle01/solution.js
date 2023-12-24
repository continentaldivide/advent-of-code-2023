const fs = require('node:fs');

const input = fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const isGamePossible = (string) => {
    let output = true;
    const numerals = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    string = string.replaceAll(';', ',');
    string = string.split(':')[1];
    const draws = string.split(',');
    let num;
    draws.forEach((draw) => {
      if (draw[2] === ' ') {
        return output;
      } else {
        num = parseInt(draw.slice(1, 3));
      }
      if (draw.includes('red') && num > 12) {
        output = false;
      }
      if (draw.includes('green') && num > 13) {
        output = false;
      }
      if (draw.includes('blue') && num > 14) {
        output = false;
      }
    });
    return output;
  };

  data = data.split(/\r\n|\r|\n/);
  let sum = 0;
  data.forEach((line, i) => {
    if (isGamePossible(line)) {
      sum += i + 1;
    }
  });
  console.log(sum);
});
