import PropTypes from 'prop-types';
import Button from './Button';
import * as buttonPanelStyles from '../styles/button-panel.module.css';

function ButtonPanel(props) {
  const { clickHandler } = props;

  return (
    <div className={buttonPanelStyles.panel}>
      <div className={buttonPanelStyles.buttonGroups}>
        <Button wide={false} name="AC" clickHandler={clickHandler} />
        <Button wide={false} name="+/-" clickHandler={clickHandler} />
        <Button wide={false} name="%" clickHandler={clickHandler} />
        <Button color="orange" name="÷" clickHandler={clickHandler} />
      </div>
      <div className={buttonPanelStyles.buttonGroups}>
        <Button wide={false} name="7" clickHandler={clickHandler} />
        <Button wide={false} name="8" clickHandler={clickHandler} />
        <Button wide={false} name="9" clickHandler={clickHandler} />
        <Button color="orange" name="X" clickHandler={clickHandler} />
      </div>
      <div className={buttonPanelStyles.buttonGroups}>
        <Button wide={false} name="4" clickHandler={clickHandler} />
        <Button wide={false} name="5" clickHandler={clickHandler} />
        <Button wide={false} name="6" clickHandler={clickHandler} />
        <Button color="orange" name="-" clickHandler={clickHandler} />
      </div>
      <div className={buttonPanelStyles.buttonGroups}>
        <Button wide={false} name="1" clickHandler={clickHandler} />
        <Button wide={false} name="2" clickHandler={clickHandler} />
        <Button wide={false} name="3" clickHandler={clickHandler} />
        <Button color="orange" name="+" clickHandler={clickHandler} />
      </div>
      <div className={buttonPanelStyles.buttonGroups}>
        <Button wide name="0" clickHandler={clickHandler} />
        <Button wide={false} name="." clickHandler={clickHandler} />
        <Button wide={false} color="orange" name="=" clickHandler={clickHandler} />
      </div>
    </div>
  );
}

ButtonPanel.propTypes = {
  clickHandler: PropTypes.func.isRequired,
};

export default ButtonPanel;
