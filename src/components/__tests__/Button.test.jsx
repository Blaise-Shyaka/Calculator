import { render, fireEvent } from '@testing-library/react';
import Button from '../Button';

describe('Button Component', () => {
  let name;
  let clickHandler;
  let btn;

  beforeEach(() => {
    name = 'AC';
    clickHandler = jest.fn();
    btn = render(<Button name={name} clickHandler={clickHandler} wide={false} />);
  });

  it('Should render the Button component', () => {
    render(<Button name={name} clickHandler={clickHandler} wide={false} />);
  });

  it('Should render a button with text "AC"', () => {
    const { getByText } = btn;
    getByText(/ac/i);
  });

  it('When a button is clicked, the callback function should run', () => {
    fireEvent.click(btn.getByText(/ac/i), clickHandler);
    expect(clickHandler).toBeCalledTimes(1);
  });
});
