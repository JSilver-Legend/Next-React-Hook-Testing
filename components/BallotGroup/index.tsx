import React from 'react';
import BallotCard from '../BallotCard';
import styles from './styles.module.css';

interface Props extends Partial<IBallotGroup> {
  selectedBallot: string;
  setSelectedBallot: any;
};

const BallotGroup: React.FC<Props> = ({ items = [], title = '', selectedBallot, setSelectedBallot }) => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.cardGroup}>
        {items.length > 0 && items.map((item: IBallot, index: number) => (
          <BallotCard
            key={item.id}
            {...item}
            selected={item.title === selectedBallot}
            selectionChanged={(value: string) => setSelectedBallot(value)}
          />
        ))}
      </div>
    </div >
  );
};

export default BallotGroup;
