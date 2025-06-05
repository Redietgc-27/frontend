import React, { useState } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const [task, setTask] = useState([]);
  //   const [newTask, setNewTask] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (task.trim() === "") return;
    navigate("/", { state: { newTask: task } });
  };
  return (
    <div className="flex mb-6 w-full max-w-md container ">
      <h1 className="text-3xl font-bold mb-6 d-flex  my-5 p-4 border rounded shadow bg-info text-white">
        <IoAddCircleOutline size={40} /> Add New Task
      </h1>
      <div className="bg-primary text-white p-4 rounded d-flex">
        <input
          type="text"
          className="flex-1 p-3 border border-gray-300 rounded-l-lg col-9 focus:outline-none"
          placeholder="Enter a new task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          onClick={handleSubmit}
          className="cl-3 btn btn-primary w-100 rounded-end"
        >
          ➕ Add
        </button>
      </div>
    </div>
  );
};

export default AddTask;
