import { Component } from 'react';
import { FbManagement } from './FbManagement/FbManagement';
import { Statistics } from './Statistics/Statistics';
import { Wrapper } from './Wrapper/Wrapper';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  addFeedback = option => {
    this.setState(pState => ({
      // console.log([option], pState[option] + 1);
      [option]: (pState[option] += 1),
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    return (
      <div>
        <Wrapper title="Please leave feedback">
          <FbManagement
            options={Object.keys(this.state)}
            onClick={this.addFeedback}
          ></FbManagement>
        </Wrapper>

        <Wrapper title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        </Wrapper>
      </div>
    );
  }
}
