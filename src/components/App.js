import { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
// eslint-disable-next-line no-unused-vars
import calculate from '../logic/calculate';

class App extends Component {
  constructor() {
    super();
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const result = calculate(this.state, buttonName);
    this.setState(result);
  }

  render() {
    const { total, next } = this.state;
    const result = next ?? total;
    return (
      <>
        <Display result={result ?? Number(result).toString()} />
        <ButtonPanel clickHandler={this.handleClick} />
      </>
    );
  }
}

export default App;
