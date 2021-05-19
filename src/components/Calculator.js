import { useState } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import * as styles from '../styles/app.module.css';

const Calculator = () => {
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
    <div className={styles.app}>
      <Display result={result ?? Number(result).toString()} />
      <ButtonPanel clickHandler={handleClick} />
    </div>
  );
};

export default Calculator;
