import PropTypes from 'prop-types';

function Button(props) {
  const {
    name, clickHandler, wide, color,
  } = props;

  const styles = {
    width: wide ? '50%' : '25%',
    height: '100%',
    backgroundColor: color,
    fontWeight: 600,
    border: '1px solid #ccc',
    outline: 'none',
  };

  return (
    <button style={styles} type="button" onClick={() => clickHandler(name)}>{ name }</button>
  );
}

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
  wide: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

Button.defaultProps = {
  color: '',
};

export default Button;
