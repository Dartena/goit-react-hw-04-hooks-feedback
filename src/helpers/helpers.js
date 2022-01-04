export function feedbackCounter(state, name) {
  switch (name) {
    case "good":
      return { ...state, good: state.good + 1 };
    case "neutral":
      return { ...state, neutral: state.neutral + 1 };
    case "bad":
      return { ...state, bad: state.bad + 1 };

    default:
      break;
  }
}

export function upperCaseFirst(str) {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
