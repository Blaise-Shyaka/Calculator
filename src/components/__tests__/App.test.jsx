import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

describe('App Component', () => {
  const appComponent = (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  it('Should render the App component successfully', () => {
    render(appComponent);
  });

  it('The Home page should be rendered by default', () => {
    const { getByText } = render(appComponent);
    getByText('Where Math Magic Happens');
  });

  it('Should display the navbar', () => {
    const { getByText } = render(appComponent);
    getByText('Home');
    getByText('Calculator');
    getByText('Quotes');
  });

  it('Should navigate to the calculator page if "Calculator" tab is clicked', () => {
    const { getByText, getAllByRole } = render(appComponent);
    const btn = getByText('Calculator');
    fireEvent.click(btn);
    const calculatorButtons = getAllByRole('button');
    expect(calculatorButtons.length).toBe(19);
  });

  it('Should navigate to the quotes page if "Quotes" tab is clicked', () => {
    const { getByText } = render(appComponent);
    const btn = getByText('Quotes');
    fireEvent.click(btn);
    getByText('Interesting Maths Quotes');
  });
});
