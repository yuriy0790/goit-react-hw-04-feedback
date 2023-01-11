import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ good, neutral, bad }) => {
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <>
      <p className={styles.statistics}>Good: {good}</p>
      <p className={styles.statistics}>Neutral: {neutral}</p>
      <p className={styles.statistics}>Bad: {bad}</p>
      <p className={styles.statistics}>Total: {countTotalFeedback()}</p>
      <p className={styles.statistics}>
        Positive feedback: {countPositiveFeedbackPercentage()}%
      </p>
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
};
