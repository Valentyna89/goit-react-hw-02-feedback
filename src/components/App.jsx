import React from 'react';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import Statistics from './Statistics/Statistics';
import css from './App.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  onLeaveFeedback = e => {
    const name = e.currentTarget.name;
    this.setState(prev => ({ [name]: prev[name] + 1 }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const quantity = good + neutral + bad;
    return quantity;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    const percentage = total ? (this.state.good / total) * 100 : 0;
    return Number(percentage).toFixed(0);
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage =
      this.countPositiveFeedbackPercentage(totalFeedback);
    const { good, neutral, bad } = this.state;

    return (
      <div className={css.Container}>
        <Section title="Please leave your feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        {totalFeedback === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            percentage={positivePercentage}
          />
        )}
      </div>
    );
  }
}
export default App;
