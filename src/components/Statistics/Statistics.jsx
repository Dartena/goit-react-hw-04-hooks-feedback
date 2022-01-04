import PropTypes from "prop-types";
import { Counter, ListItem, StatisticsList } from "../styles/styled";

function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <StatisticsList>
      <ListItem>
        <Counter>Good: {good}</Counter>
      </ListItem>
      <ListItem>
        <Counter>Neutral: {neutral}</Counter>
      </ListItem>
      <ListItem>
        <Counter>Bad: {bad}</Counter>
      </ListItem>
      <ListItem>
        <Counter>Total: {total}</Counter>
      </ListItem>
      <ListItem>
        <Counter>Positive feedback: {positivePercentage}%</Counter>
      </ListItem>
    </StatisticsList>
  );
}

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
