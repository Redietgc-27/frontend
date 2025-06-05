import HomePage from "./Pages/HomePage";
import AddTask from "./Pages/AddTask";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/addtask" element={<AddTask />} />
    </Routes>
  );
};

export default App;
