import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TestRenderer from 'react-test-renderer';
import App from '../App';
import Home from '../Home';
import Calculator from '../Calculator';
import Quote from '../Quote';

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

  it('Should render the Home page correctly', () => {
    const tree = TestRenderer.create(<Home />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should render the Calculator page correctly', () => {
    const tree = TestRenderer.create(<Calculator />);
    expect(tree.toJSON()).toMatchSnapshot();
  });

  it('Should render the Quotes page correctly', () => {
    const tree = TestRenderer.create(<Quote />);
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
