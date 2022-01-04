import PropTypes from "prop-types";
import { FeedbackBtn, FeedbackList, ListItem } from "../styles/styled";
import { upperCaseFirst } from "../../helpers/helpers";

function FeedbackOptions({ options, onClickHandler }) {
  return (
    <FeedbackList>
      {options.map((option) => (
        <ListItem key={option}>
          <FeedbackBtn name={option} onClick={onClickHandler}>
            {upperCaseFirst(option)}
          </FeedbackBtn>
        </ListItem>
      ))}
    </FeedbackList>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClickHandler: PropTypes.func.isRequired,
};
export default FeedbackOptions;
