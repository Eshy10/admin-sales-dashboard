import classNames from 'classnames';
import { Styled } from '../../types';
import { ElementType, forwardRef, MouseEventHandler, ReactNode } from 'react';
import styles from './button.module.scss';

export interface ButtonProps extends Styled {
   type?: 'button' | 'submit' | 'reset';
   as?: 'button' | 'Link';
   color?: string;
   full?: boolean;
   variant?: 'primary' | 'secondary';
   disabled?: boolean;
   loading?: boolean;
   icon?: ElementType;
   children?: ReactNode;
   id?: string;
   link?: string;
   onClick?: MouseEventHandler;
}

const Button = forwardRef(
   ({
      type = 'button',
      variant = 'primary',
      full = false,
      children = null,
      className = '',
      disabled = false,
      ...restProps
   }: ButtonProps) => {
      let btnVariant = '';
      switch (variant) {
         case 'primary':
            btnVariant = styles['primary-button'];
            break;
         case 'secondary':
            btnVariant = styles['secondary-button'];
            break;
         default:
            btnVariant = styles.button;
      }

      const classes = classNames(
         className,
         styles.btnContainer,
         full && styles.btnFull,
         btnVariant,
      );
      return (
         <button disabled={disabled} {...restProps} type={type} className={classes}>
            {children}
         </button>
      );
   },
);

export default Button;
