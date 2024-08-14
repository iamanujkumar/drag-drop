import React from "react";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

const TaskColumn = ({ title, icon, tasks, status, handleDelete, onDrop, onDragOver }) => {
  return (
    <section
      className="task_column"
      onDrop={(e) => onDrop(e, status)}
      onDragOver={onDragOver}
    >
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {title}
      </h2>
      {tasks.map(
        (task, index) =>
          task.status === status && (
            <TaskCard
              key={index}
              title={task.task}
              tags={task.tags}
              handleDelete={handleDelete}
              index={index}
              draggable
            />
          )
      )}
    </section>
  );
};

export default TaskColumn;