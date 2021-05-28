import { render, fireEvent } from '@testing-library/react';
import Calculator from '../Calculator';

describe('Calculator component', () => {
  const calculatorComponent = <Calculator />;

  it('Should render successfully the Calculator component', () => {
    render(calculatorComponent);
  });

  it('Should print the value of the clicked buttons in the display', () => {
    const { getByText } = render(calculatorComponent);
    const btnFive = getByText('5');
    const btnNine = getByText('9');
    fireEvent.click(btnFive);
    fireEvent.click(btnNine);
    getByText('59');
  });

  it('Should clear the Display if the "AC" button is clicked and print "0"', () => {
    const { getAllByText, getByText } = render(calculatorComponent);
    const clearButton = getByText(/ac/i);
    const buttonSix = getByText('6');
    // Click the button 6 and then clear it
    fireEvent.click(buttonSix);
    fireEvent.click(clearButton);
    const allZeros = getAllByText('0');
    // DOM will have 2 zeros. One in the display and the zero button value
    expect(allZeros.length).toBe(2);
  });

  it('Should be able to do additions', () => {
    const { getByText } = render(calculatorComponent);
    const buttonFive = getByText('5');
    const plusSign = getByText('+');
    const buttonSix = getByText('6');
    const equalSign = getByText('=');
    fireEvent.click(buttonFive);
    fireEvent.click(plusSign);
    fireEvent.click(buttonSix);
    fireEvent.click(equalSign);
    getByText('11');
  });

  it('Should be able to do multiplication', () => {
    const { getByText } = render(calculatorComponent);
    const buttonSix = getByText('6');
    const multiplicationSign = getByText('X');
    const equalSign = getByText('=');
    fireEvent.click(buttonSix);
    fireEvent.click(multiplicationSign);
    fireEvent.click(buttonSix);
    fireEvent.click(equalSign);
    getByText('36');
  });

  it('Should be able to do Division', () => {
    const { getByText, getAllByText } = render(calculatorComponent);
    const buttonSix = getByText('6');
    const divisionSign = getByText('÷');
    const equalSign = getByText('=');
    fireEvent.click(buttonSix);
    fireEvent.click(divisionSign);
    fireEvent.click(buttonSix);
    fireEvent.click(equalSign);
    // The DOM will have two "1"s. One in the display and another as the button value
    expect(getAllByText('1').length).toBe(2);
  });

  it('Should be able to perform Substraction', () => {
    const { getByText, getAllByText } = render(calculatorComponent);
    const buttonSix = getByText('6');
    const minusSign = getByText('-');
    const equalSign = getByText('=');
    fireEvent.click(buttonSix);
    fireEvent.click(minusSign);
    fireEvent.click(buttonSix);
    fireEvent.click(equalSign);
    // The DOM will have two "0"s. One in the display and another as the button value
    expect(getAllByText('0').length).toBe(2);
  });

  it('Should print an error, when a number is divided by zero', () => {
    const { getByText, getAllByText } = render(calculatorComponent);
    const buttonSix = getByText('6');
    const buttonZero = getAllByText('0')[1];
    const divisionSign = getByText('÷');
    const equalSign = getByText('=');
    fireEvent.click(buttonSix);
    fireEvent.click(divisionSign);
    fireEvent.click(buttonZero);
    fireEvent.click(equalSign);
    getByText('Error');
  });
});
