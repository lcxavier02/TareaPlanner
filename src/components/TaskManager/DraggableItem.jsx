import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { Task } from '@mui/icons-material';
import Tasks from '../Tasks/Tasks';
import Postit from '../Post-it/Post-it';

const DraggableItem = () => {
  const { attributes, listeners, setNodeRef, isDragging, transform } = useDraggable({
    id: 'draggable-item',
  });

  return (
    <div
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={{
        width: '160px',
        height: '160px',
        border: '1px solid #000',
        padding: '8px',
        backgroundColor: isDragging ? 'lightblue' : '#FFFF99',
        cursor: 'grab',
        borderRadius: '4px',
        marginBottom: '8px',
        transform: transform ? `translate(${transform.x}px, ${transform.y}px)` : undefined,
        transition: 'background-color 0.3s', // Transición al cambiar el color de fondo
      }}
    >
      Note
      
    </div>
  );
};

export default DraggableItem;
