import PropTypes from 'prop-types';
import s from './Statistics.module.css';

export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <div>
          <p className={s.good}>
            <b>Good:</b> {good}
          </p>
          <p className={s.neutral}>
            <b>Neutral:</b> {neutral}
          </p>
          <p className={s.bad}>
            <b>Bad:</b> {bad}
          </p>
          <p className={s.total}>Total: {total}</p>
          <p className={s.percentage}>
            Positive feedback: {positivePercentage}%
          </p>
        </div>
      )}
    </>
  );
}

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
