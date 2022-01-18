import React from 'react';
import styles from './styles.module.css';

type Props = {
  type?: "submit" | "button";
  className?: string;
  children: React.ReactNode;
  onClick?: any;
};

const Button: React.FC<Props> = ({ type = "button", className, children, onClick }) => {
  return (
    <button type={type} className={`${styles.button} ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
