import { Component } from 'react';

import { GlobalStyleComponent } from 'styles/GlobalStyles';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Container } from './Container/Container.styled';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  feedbackButtonClick = opt => {
    this.setState(prevState => ({
      [opt]: prevState[opt] + 1,
    }));
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage();
    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            handleClick={this.feedbackButtonClick}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() ? (
            <Statistics count={this.state} total={total} positive={positive} />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>

        <GlobalStyleComponent />
      </Container>
    );
  }
}
