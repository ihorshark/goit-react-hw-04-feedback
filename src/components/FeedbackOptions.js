import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback }) {
  return (
    <div>
      <button
        className={s.button}
        type="button"
        name="good"
        onClick={() => onLeaveFeedback({ type: 'good' })}
      >
        Good
      </button>
      <button
        className={s.button}
        type="button"
        name="neutral"
        onClick={() => onLeaveFeedback({ type: 'neutral' })}
      >
        Neutral
      </button>
      <button
        className={s.button}
        type="button"
        name="bad"
        onClick={() => onLeaveFeedback({ type: 'bad' })}
      >
        Bad
      </button>
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
};
