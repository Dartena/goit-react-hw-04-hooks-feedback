import { useReducer } from "react";
import FeedbackOptions from "./components/FeedbackOptions/FeedbackOptions";
import Notification from "./components/Notification/Notification";
import PageSection from "./components/PageSection/PageSection";
import Statistics from "./components/Statistics/Statistics";
import { AppDiv } from "./components/styles/styled";
import { feedbackCounter } from "./helpers/helpers";

const options = ["good", "neutral", "bad"];

function App() {
  const [state, dispatch] = useReducer(feedbackCounter, {
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const addFeedback = (event) => {
    const { name } = event.target;
    dispatch(name);
  };

  function countTotalFeedback() {
    return state.good + state.neutral + state.bad;
  }

  function countPositiveFeedbackPercentage() {
    return Math.round((state.good / countTotalFeedback()) * 100);
  }

  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage();
  return (
    <AppDiv>
      <PageSection
        title="Please leave feedback"
        children={
          <FeedbackOptions options={options} onClickHandler={addFeedback} />
        }
      />
      <PageSection
        title="Statistics"
        children={
          total ? (
            <Statistics
              good={state.good}
              neutral={state.neutral}
              bad={state.bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )
        }
      />
    </AppDiv>
  );
}

export default App;
