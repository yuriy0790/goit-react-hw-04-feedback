import { useState } from 'react';

import { GlobalStyleComponent } from 'styles/GlobalStyles';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';
import Notification from './Notification/Notification';
import { Container } from './Container/Container.styled';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const feedbackButtonClick = opt => {
    switch (opt) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;
      default:
        return;
    }
  };
  const isStatisticsShown = () => good > 0 || neutral > 0 || bad > 0;
  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} handleClick={feedbackButtonClick} />
      </Section>
      <Section title="Statistics">
        {isStatisticsShown() ? (
          <Statistics good={good} neutral={neutral} bad={bad} />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>

      <GlobalStyleComponent />
    </Container>
  );
}
