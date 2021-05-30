import PropTypes from 'prop-types';
import * as styles from '../styles/display.module.css';

function Display({ result }) {
  return (
    <div className={styles.display}>
      <p>{result}</p>
    </div>
  );
}

Display.propTypes = {
  result: PropTypes.string,
};

Display.defaultProps = {
  result: '0',
};

export default Display;
