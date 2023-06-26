import React from 'react';

type CardProps = {
    title: string;
    start: number;
    end: number;
  };
  
  const Card: React.FC<CardProps> = ({ start, end }) => {
    const cardHeight = (end - start) / (8 - 3) * 100;
    return (
      <div className="bg-purple-200 rounded shadow" style={{height: `${cardHeight}%`}}>
      </div>
    );
  };

export default Card;