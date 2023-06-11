import React from 'react';

export interface TaskProps {
  title: string;
  description: string;
}

export const Task: React.FC<TaskProps> = ({ title, description }) => (
  <div className="border rounded p-2 mb-4">
    <h4 className="font-bold">{title}</h4>
    <p>{description}</p>
  </div>
);
