import React from 'react';
import { Column } from './Column';

const KanbanBoard: React.FC = () => (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Kanban Board</h2>
      <div className="flex justify-between">
        <Column title="Todo" tasks={[{ title: 'Task 1', description: 'Task description goes here' }, { title: 'Task 2', description: 'Task description goes here' }]} />
        <Column title="In Progress" tasks={[{ title: 'Task 3', description: 'Task description goes here' }]} />
        <Column title="Done" tasks={[{ title: 'Task 4', description: 'Task description goes here' }]} />
      </div>
    </div>
  );
  
  export default KanbanBoard;