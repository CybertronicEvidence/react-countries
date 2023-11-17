// import PropTypes from "prop-types";

const Button = ({ style, type, onClick, text }) => (
  <button className={style} type={type} onClick={onClick}>
    {text}
  </button>
);

Button.propTypes;
export default Button;
