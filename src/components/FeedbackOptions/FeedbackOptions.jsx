import PropTypes from 'prop-types';
import styles from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleClick }) => {
  return options.map(opt => (
    <button
      className={styles.gradientButton}
      type="button"
      onClick={() => handleClick(opt)}
      key={opt}
    >
      {opt}
    </button>
  ));
};
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  handleClick: PropTypes.func.isRequired,
};
