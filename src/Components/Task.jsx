import React from "react";

const Task = ({ title, description, deleteTask, index }) => {
  return (
    <div className="task">
      <div>
        <p style={{ color: "beige" }}>{title}</p>
        <span style={{ color: "beige" }}>{description}</span>
      </div>
      <button onClick={() => deleteTask(index)}>-</button>
    </div>
  );
};

export default Task;
