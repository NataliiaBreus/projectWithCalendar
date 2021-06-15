import React, { useState, Component, PureComponent } from 'react';
import Counter from '../../components/Counter';
import Step from './Step';
import style from './CounterPage.module.sass';
import Button from '../../components/Button';

class CounterPage extends Component {
  state = {
    step: 1,
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ step: Number(value) });
  };

  render () {
    console.log('render page');
    return (
      <div className={style.container}>
        <input
          type='range'
          min={1}
          max={100}
          value={this.state.step}
          onChange={this.handleChange}
        />
        <Counter step={this.state.step} />
        <Button
          onClick={() => {
            this.setState({ step: this.state.step });
          }}
        >
          Click me
        </Button>
      </div>
    );
  }
}

/*
function CounterPage (props) {
  const [step, setStep] = useState(1);
  return (
    <div className={style.container}>
      <Step step={step} setStep={setStep} />
      <Counter step={step} />
    </div>
  );
}
*/
export default CounterPage;
