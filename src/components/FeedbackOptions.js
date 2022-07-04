import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ onLeaveFeedback, buttons }) {
  const capitalizeFirst = str => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
      {buttons.map(button => (
        <button
          key={button}
          className={s.button}
          type="button"
          name={button}
          onClick={() => onLeaveFeedback({ type: button })}
        >
          {capitalizeFirst(button)}
        </button>
      ))}
    </div>
  );
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  buttons: PropTypes.array.isRequired,
};
