import React, { useEffect, useState } from "react";
import Task from "./Task";

const Home = () => {
  const initialArray = localStorage.getItem("tasks")
    ? JSON.parse(localStorage.getItem("tasks"))
    : [];
  const [tasks, setTasks] = useState(initialArray);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const SubmitHandler = (e) => {
    e.preventDefault();
    setTasks([...tasks, { title, description }]);
    setTitle("");
    setDescription("");
  };
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (index) => {
    let filteredArray = tasks.filter((value, i) => {
      return i !== index;
    });
    setTasks(filteredArray);
  };

  return (
    <div className="container">
      <h1>Your own To-Do List</h1>
      <form onSubmit={SubmitHandler}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Task Name.."
        />
        <textarea
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          placeholder="Description goes here"
        ></textarea>

        <button type="submit"> Add </button>
      </form>

      {tasks.map((item, index) => {
        return (
          <Task
            key={index}
            title={item.title}
            description={item.description}
            deleteTask={deleteTask}
            index={index}
          />
        );
      })}
    </div>
  );
};

export default Home;
