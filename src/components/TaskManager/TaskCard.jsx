import React, { useState } from "react";
import TrashIcon from "../icons/TrashIcon";
import { useSortable } from "@dnd-kit/sortable";
import { FaRegTrashCan } from "react-icons/fa6";
import { CSS } from "@dnd-kit/utilities";

function TaskCard({ task, deleteTask, updateTask }) {
  const [mouseIsOver, setMouseIsOver] = useState(false);
  const [editMode, setEditMode] = useState(true);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    },
    disabled: editMode,
  });

  const style = {
    transition,
    transform: transform ? transform.toString() : "",
  };

  const toggleEditMode = () => {
    setEditMode((prev) => !prev);
    setMouseIsOver(false);
  };

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="
        opacity-30 bg-white p-2.5 h-[100px] h-min-[100px] w-[150px] min-w-[100px] items-center flex text-left rounded-xl border-2 border-gray-300 cursor-grab relative shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
      />
    );
  }

  if (editMode) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className="bg-white p-2.5 h-[100px] min-h-[100px] w-[150px] min-w-[100px] items-center flex text-left rounded-xl hover:ring-2 hover:ring-inset hover:border-gray-300 cursor-grab relative shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)]"
      >
        <textarea
          className="
        h-[90%]
        w-full resize-none border-none rounded bg-transparent text-black focus:outline-none
        "
          value={task.content}
          autoFocus
          placeholder="Task content here"
          onBlur={toggleEditMode}
          onKeyDown={(e) => {
            if (e.key === "Enter" && e.shiftKey) {
              toggleEditMode();
            }
          }}
          onChange={(e) => updateTask(task.id, e.target.value)}
        />
      </div>
    );
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={toggleEditMode}
      className="bg-white p-2.5 h-[100px] min-h-[100px] w-[130px] min-w-[145px] items-center flex text-left rounded-xl border border-gray-300 cursor-grab relative task shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] m-2"
      onMouseEnter={() => {
        setMouseIsOver(true);
      }}
      onMouseLeave={() => {
        setMouseIsOver(false);
      }}
    >
      <p className="my-auto h-[90%] w-full overflow-y-auto overflow-x-hidden whitespace-pre-wrap text-black">
        {task.content}
      </p>

      {mouseIsOver && (
        <FaRegTrashCan
          className="text-red-600 cursor-pointer text-lg"
          onClick={() => {
            deleteTask(task.id);
          }}
        />
      )}
    </div>
  );
}

export default TaskCard;
