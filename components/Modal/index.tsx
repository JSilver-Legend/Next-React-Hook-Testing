import React from 'react';
import styles from './styles.module.css';

type Props = {
  show?: boolean;
  onClose?: any;
  children?: React.ReactNode;
}

const Modal: React.FC<Props> = ({show = false, onClose, children}) => {
  return (
    <div className={show ? "" : styles.hidden}>
      <div className={styles.backDrop} onClick={onClose} />
      <div className={styles.wrapper}>
        <div className={styles.close} onClick={onClose}>X</div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
