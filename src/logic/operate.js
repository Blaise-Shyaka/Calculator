import Big from 'big.js';

const operate = (numberOne, numberTwo, operation) => {
  const operand1 = Big(numberOne);
  const operand2 = Big(numberTwo);
  let result = 0;

  switch (operation) {
    case '-':
      result = operand1.minus(operand2);
      break;
    case '+':
      result = operand1.plus(operand2);
      break;
    case 'X':
      result = operand1.times(operand2);
      break;
    case '÷':
      try {
        result = operand1.div(operand2);
      } catch (e) {
        result = 'Error';
      }
      break;
    case '%':
      result = operand1.div(100);
      break;
    default:
      break;
  }
  return result;
};

export default operate;
