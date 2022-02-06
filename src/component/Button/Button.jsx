import PropTypes from "prop-types";
import s from "./Button.module.scss";

const Button = ({
  text,
  onClick = () => {},
  type = "button",
  className,
  isDisabled,
}) => {
  const dis = text === "ОЧИCТИТЬ" ? false : isDisabled;

  return (
    <button
      className={`${s.button} ${className}`}
      type={type}
      onClick={onClick}
      disabled={dis}
    >
      <span>{text}</span>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};
export default Button;
