const fs = require('node:fs');

const input = fs.readFile('./input.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const getPower = (string) => {
    string = string.replaceAll(';', ',');
    string = string.split(':')[1];
    const draws = string.split(',');
    let num;
    let red = 0;
    let green = 0;
    let blue = 0;
    draws.forEach((draw) => {
      if (draw[2] === ' ') {
        num = parseInt(draw.slice(1, 2));
      } else {
        num = parseInt(draw.slice(1, 3));
      }
      if (draw.includes('red') && num > red) {
        red = num;
      }
      if (draw.includes('green') && num > green) {
        green = num;
      }
      if (draw.includes('blue') && num > blue) {
        blue = num;
      }
    });
    return red * green * blue;
  };

  data = data.split(/\r\n|\r|\n/);
  let sum = 0;
  data.forEach((line, i) => {
    sum += getPower(line);
  });
  console.log(sum);
});
