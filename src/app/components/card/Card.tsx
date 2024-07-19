// Card.tsx
import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  title: string;
  value: string | undefined;
  isLoading: boolean;
  error: string | undefined;
  className?: string; // className 속성 추가
}

const Card: React.FC<CardProps> = ({ title, value, isLoading, error, className }) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">{isLoading ? <p>Loading...</p> : error ? <p>{error}</p> : <p>{value}</p>}</div>
    </div>
  );
};

export default Card;
