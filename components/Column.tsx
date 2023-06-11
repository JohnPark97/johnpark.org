import React from 'react';
import { Task, TaskProps } from './Task';

interface ColumnProps {
    title: string;
    tasks: TaskProps[];
  }
  
export const Column: React.FC<ColumnProps> = ({ title, tasks }) => (
<div className="w-1/3 px-2 m-2 ring-black ring-opacity-80 ring-2 rounded">
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <div className="bg-white rounded shadow p-6">
    {tasks.map((task, index) => (
        <Task key={index} {...task} />
    ))}
    </div>
</div>
);
  