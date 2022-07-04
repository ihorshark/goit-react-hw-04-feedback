import { useReducer } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Notification from './Notification';
import Statistics from './Statistics';

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  function reducer(state, action) {
    switch (action.type) {
      case 'good':
        return { ...state, good: state.good + 1 };
      case 'neutral':
        return { ...state, neutral: state.neutral + 1 };
      case 'bad':
        return { ...state, bad: state.bad + 1 };
      default:
        throw new Error();
    }
  }

  const countTotalFeedback = () => {
    return Object.values(state).reduce((previousValue, state) => {
      return previousValue + state;
    }, 0);
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((state.good / countTotalFeedback()) * 100);
  };

  return (
    <div>
      <Section title="Please leave feedback">
        <FeedbackOptions
          onLeaveFeedback={dispatch}
          buttons={Object.keys(initialState)}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() ? (
          <Statistics
            good={state.good}
            neutral={state.neutral}
            bad={state.bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <Notification />
        )}
      </Section>
    </div>
  );
}
