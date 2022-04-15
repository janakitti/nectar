import React from 'react';
import '../../../styles/main.scss';

export interface ICardProps {
  label: string;
  children: React.ReactNode;
}

const Card: React.FC<ICardProps> = ({ label, children }) => {
  return <div className="card1">{children}</div>;
};

export default Card;
