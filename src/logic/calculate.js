import operate from './operate';

const calculate = (data, buttonName) => {
  const { total, next, operation } = data;

  // Reset all values if AC is clicked or the result/total is an error
  if (buttonName === 'AC' || total === 'Error') {
    return { total: null, next: null, operation: null };
  }

  // Return the percentage of the recently typed number
  if (buttonName === '%') {
    if (!next) return { total: operate(total, next, buttonName).toString(), next, operation };
    if (!total) return { total, next: operate(next, total, buttonName).toString(), operation };
  }

  // Add a dot at the end of the recently typed number
  if (buttonName === '.') {
    if (!next) return { total: `${total}${buttonName}`, next, operation };
    if (!total) return { total, next: `${next}${buttonName}`, operation };
  }

  // Multiply by -1, the recently typed number
  if (buttonName === '+/-') {
    if (!next) return { total: (total * -1).toString(), next, operation };
    if (!total) return { total, next: (next * -1).toString(), operation };
  }

  // If both operands are available, calculate the result
  // If there is only one operand, assign it to the total to leave space for the second operand
  if (['+', '-', 'X', '÷'].includes(buttonName)) {
    if (total && next) {
      return { total: (operate(total, next, buttonName)).toString(), next: null, operation: null };
    }
    return { total: total ?? next, next: null, operation: buttonName };
  }

  if (buttonName === '=') {
    if (total && next) {
      return { total: (operate(total, next, operation)).toString(), next: null, operation: null };
    }
    return { total: total ?? next, next: null, operation };
  }

  return { total, next, operation };
};

export default calculate;
