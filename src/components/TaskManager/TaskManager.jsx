import React from "react";
import { DndContext, DragOverlay, useDroppable } from "@dnd-kit/core";
import DraggableItem from "./DraggableItem";
import Postit from "../Post-it/Post-it";

const DroppableContainer = ({ index, children, onDrop }) => {
  const { over, setNodeRef } = useDroppable({
    id: `droppable-container-${index}`,
  });

  return (
    <div
      ref={setNodeRef}
      {...(onDrop && { onDrop: () => onDrop(index) })}
      style={{
        width: "180px",
        height: "180px",
        border: "2px dashed #000",
        padding: "8px",
        backgroundColor: over ? "lightyellow" : "transparent",
        borderRadius: "4px",
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "5px",
        fontSize: "14px",
        marginBottom: "8px",
        transition: "background-color 0.3s",
      }}
    >
      {children}
    </div>
  );
};

export const TaskManager = () => {
  const [droppedIndex, setDroppedIndex] = React.useState(null);

  const handleDrop = (index) => {
    setDroppedIndex(index);
  };

  return (
    <DndContext>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "16px",
          padding: "16px",
        }}
      >
        {[...Array(12)].map((_, index) => (
          <DroppableContainer key={index} index={index} onDrop={handleDrop}>
            {droppedIndex === index ? (
              <DraggableItem />
            ) : (
              `Droppable ${index + 1}`
            )}
          </DroppableContainer>
        ))}
      </div>
      <DraggableItem />
      <DragOverlay>
        {({ transform }) => (
          <div
            style={{
              pointerEvents: "none",
              position: "fixed",
              zIndex: 1000,
              width: "160px",
              height: "160px",
              border: "1px solid #000",
              padding: "8px",
              backgroundColor: "lightblue",
              borderRadius: "4px",
              transform: transform
                ? `translate(${transform.x}px, ${transform.y}px)`
                : undefined,
            }}
          >
            Note
          </div>
        )}
      </DragOverlay>
    </DndContext>
  );
};
