import React from 'react';
import { Column } from './Column';

const title = "Skills";

const KanbanBoard: React.FC = () => (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>
      <div className="flex justify-between">
        <Column title="Learning" tasks={[{ title: 'Typescript', description: 'Task description goes here' }, { title: 'Task 2', description: 'Task description goes here' }]} />
        <Column title="Intermidiate" tasks={[{ title: 'Ruby on Rails', description: 'Task description goes here' }]} />
        <Column title="Proficient" tasks={[{ title: 'Python', description: 'Task description goes here' }]} />
      </div>
    </div>
  );
  
  export default KanbanBoard;