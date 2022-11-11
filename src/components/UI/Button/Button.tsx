import { FC } from 'react';
import cn from 'classnames';
import { ButtonType } from '../../../types/ButtonTypes';
import styles from './Button.module.scss';

const Button: FC<ButtonType> = ({
  handleOnClick,
  children,
  classes,
  disabled = false,
}) => (
  <button
    disabled={disabled}
    type="button"
    className={cn(styles.button, classes)}
    onClick={() => handleOnClick()}
  >
    {children}
  </button>
);

export default Button;
