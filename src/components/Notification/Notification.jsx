import PropTypes from "prop-types";
import { NotificationText } from "../styles/styled";

function Notification({ message }) {
  return <NotificationText>{message}</NotificationText>;
}

Notification.propTypes = { message: PropTypes.string.isRequired };

export default Notification;
