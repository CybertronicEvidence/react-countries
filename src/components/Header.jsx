import PropTypes from "prop-types";

const Header = (props) => {
  // const { welcome, title, subtitle } = props;
  console.log(props);
  return <header></header>;
};

Header.propTypes = {
  data: {
    welcome: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
  },
};
export default Header;
