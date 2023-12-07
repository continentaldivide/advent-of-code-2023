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

  return parseInt(firstNum) + parseInt(secondNum);
};

console.log(getCalibrationValue('heightseven4two5'));
console.log(getCalibrationValue('npskfdstpk2knsm'));
console.log(getCalibrationValue('djnrmpxjbsbpgzvtjkhq6pkkfshx'));
