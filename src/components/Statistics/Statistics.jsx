import PropTypes from 'prop-types';
import styles from './Statistics.module.css';

const Statistics = ({ count: { good, neutral, bad }, total, positive }) => {
  return (
    <>
      <p className={styles.statistics}>Good: {good}</p>
      <p className={styles.statistics}>Neutral: {neutral}</p>
      <p className={styles.statistics}>Bad: {bad}</p>
      <p className={styles.statistics}>Total: {total}</p>
      <p className={styles.statistics}>Positive feedback: {positive}%</p>
    </>
  );
};
export default Statistics;

Statistics.propTypes = {
  count: PropTypes.object.isRequired,
  total: PropTypes.number.isRequired,
  positive: PropTypes.number.isRequired,
};
