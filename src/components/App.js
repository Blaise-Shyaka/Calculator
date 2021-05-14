import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';

const App = () => {
  const [calculatorState, setCalculatorState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function handleClick(buttonName) {
    const result = calculate(calculatorState, buttonName);
    setCalculatorState(result);
  }

  const { total, next } = calculatorState;
  const result = next ?? total;
  return (
    <>
      <Display result={result ?? Number(result).toString()} />
      <ButtonPanel clickHandler={handleClick} />
    </>
  );
};

export default App;
