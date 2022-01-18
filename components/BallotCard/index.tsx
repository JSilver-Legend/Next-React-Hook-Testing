import React from 'react'
import Image from 'next/image'
import styles from './styles.module.css'
import Button from '../Button'

interface Props extends Partial<IBallot> {
  selected?: boolean;
  selectionChanged?: any;
}

const BallotCard: React.FC<Props> = ({ photoUrL = '', title = '', selected = false, selectionChanged }) => {
  return (
    <div className={`${styles.wrapper} ${selected ? styles.wrapperSelected : ""}`}>
      <div className={styles.title}>{title}</div>
      <div className={styles.imageWrapper}>
        <Image src={photoUrL} alt='Avatar' loading="lazy" width={100} height={100} />
      </div>
      <Button className={selected ? styles.buttonSelected : ""} onClick={() => selectionChanged(title)}>SelectButton</Button>
    </div>
  )
}

export default BallotCard
