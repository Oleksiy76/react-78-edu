import PropTypes from "prop-types";
import css from "./Event.module.css";
// import { formatEventStart } from "utils/formatEventStart";
// import { formatEventDuration } from "utils/formatEventDuration";
import { formatEventStart, formatEventDuration } from "utils";

export const Event = ({ name, location, start, end }) => {
  const formattedStart = formatEventStart(start);
  const duration = formatEventDuration(start, end);
  return (
    <div className={css.event}>
      <h2 className={css.title}>{name}</h2>
      <p className={css.info}>{location}</p>
      <p className={css.info}>{formattedStart}</p>
      <p className={css.info}>{duration}</p>
    </div>
  );
};

Event.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  end: PropTypes.string.isRequired,
};
