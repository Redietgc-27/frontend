import { useEffect, useState } from "react";
import { FaListCheck, FaRegSquareCheck } from "react-icons/fa6";
import { FaRegCheckSquare, FaSearchengin } from "react-icons/fa";
import { IoAddCircleOutline } from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

const HomePage = () => {
  const [query, setQuery] = useState("");
  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state?.newTask) {
      setTasks((prev) => [
        ...tasks,
        { text: location.state.newTask, completed: false },
      ]);
    }
  }, [location.state]);

  const handleToggleComplete = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleDeleteTask = (index) => {
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className=" p-4 rounded container">
      <div className="flex-md-row align-items-center justify-content-between d-flex my-5 p-4 border rounded shadow bg-info text-white d-flex">
        <h1 className="fw-bold mb-3 mb-md-0 d-flex align-items-center gap-2">
          <FaListCheck size={40} /> My To-Do List
        </h1>

        <div className="d-flex align-items-center mb-3 mb-md-0">
          <FaSearchengin className="me-2" size={30} />
          <input
            type="search"
            className="form-control d-none d-md-block"
            placeholder="Search tasks..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{ maxWidth: "250px" }}
          />
        </div>

        <div
          className="d-flex align-items-center"
          style={{ cursor: "pointer", gap: "10px" }}
          onClick={() => navigate("/addtask")}
        >
          <IoAddCircleOutline size={40} />
          <h5 className="mb-0 ">Add New Task</h5>
        </div>
      </div>
      <div bg-primary text-white min-vh-100>
        <ul className="list-group mt-3">
          {tasks.map((task, idx) => (
            <li className="list-group-item " key={idx}>
              <div
                className="d-flex justify-content-between"
                onClick={() => handleToggleComplete(idx)}
                onChange={(e) => handleUpdateTask(idx, e.target.value)}
              >
                {task.completed ? (
                  <FaRegSquareCheck />
                ) : (
                  <MdCheckBoxOutlineBlank />
                )}
                <span className="col-8 ">{task.text}</span>

                <button
                  onClick={() => handleDeleteTask(idx)}
                  className="btn btn-sm btn-danger col-1"
                >
                  🗑️
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default HomePage;
