import Big from 'big.js';

// eslint-disable-next-line consistent-return
const operate = (numberOne, numberTwo, operation) => {
  const operand1 = Big(numberOne);
  const operand2 = Big(numberTwo);

  if (operation === '-') return operand1.minus(operand2);
  if (operation === '+') return operand1.plus(operand2);
  if (operation === 'X') return operand1.times(operand2);
  if (operation === '÷') return operand1.div(operand2);
};

export default operate;
