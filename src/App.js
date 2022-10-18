import "./styles/App.scss"
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

import TaskForm from "./components/taskForm";
import TaskList from "./components/taskList";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<TaskList />} />
          <Route path="/create-task" element={<TaskForm />} />
          <Route path="/edit-task/:id" element={<TaskForm />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
