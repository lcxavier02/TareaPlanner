import React, { useMemo, useState } from "react";
import { SortableContext, useSortable } from "@dnd-kit/sortable";
import TrashIcon from "../icons/TrashIcon";
import PlusIcon from "../icons/PlusIcon";
import TaskCard from "./TaskCard";

function ColumnContainer({
  column,
  deleteColumn,
  updateColumn,
  createTask,
  tasks,
  deleteTask,
  updateTask,
}) {
  const [editMode, setEditMode] = useState(false);

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id);
  }, [tasks]);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: transform ? transform.toString() : "",
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
      bg-black
      opacity-40
      border-2
      border-gray-300
      w-[350px]
      h-[500px]
      max-h-[500px]
      rounded-md
      flex
      flex-col
      "
      ></div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="
      bg-columnBackgroundColor
      w-[350px]
      h-[500px]
      rounded-md
      flex
      flex-col
      border-2
      border-gray-300
      shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]
      m-2
      "
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true);
        }}
        className="bg-mainBackgroundColor text-md h-[60px] cursor-grab rounded-md rounded-b-none p-3 font-bold border-gray-300 border flex items-center justify-between"
      >
        <div className="flex gap-2">
          <div
            className="
        flex
        justify-center
        items-center
        bg-columnBackgroundColor
        px-2
        py-1
        text-sm
        rounded-full
        "
          >
            0
          </div>
          {!editMode && column.title}
          {editMode && (
            <input
              className="bg-black focus:border-gray-300 border rounded outline-none px-2"
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false);
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return;
                setEditMode(false);
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id);
          }}
          className="
        stroke-red-500
        rounded
        px-1
        py-2
        "
        >
          {/* <TrashIcon /> */}
        </button>
      </div>

      {/* Column task container */}
      <div
        className="flex flex-grow flex-wrap
      w-[350px]
      h-[5000px]
      gap-1 p-2 overflow-x-hidden overflow-y-auto"
      >
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              updateTask={updateTask}
            />
          ))}
        </SortableContext>
      </div>

      {/* Column footer */}
      <button
        className="
        hover:text-green-500 
        flex gap-2 
        items 
        border-columnBackgroundColor 
        border-2 
        rounded-md
        rounded-t-none 
        p-4
        "
        onClick={() => {
          createTask(column.id);
        }}
      >
        <PlusIcon />
      </button>
    </div>
  );
}

export default ColumnContainer;
