import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, editTask } from "../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";
import { useNavigate, useParams } from "react-router-dom";

function TaskForm() {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();
  const tasks = useSelector((state) => state.tasks);

  const handleChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (params.id) {
      dispatch(editTask(task));
    } else {
      dispatch(
        addTask({
          ...task,
          id: uuid(),
        })
      );
    }

    navigate("/");
  };

  useEffect(() => {
    if (params.id) {
      setTask(tasks.find((task) => task.id === params.id));
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} className="tasks-form">
      <div className="input-container">
        <h3> Create / Edit task</h3>
        <input
          name="title"
          type="text"
          placeholder="title"
          onChange={handleChange}
          value={task.title}
          className="inp-title"
        />

        <textarea
          name="description"
          placeholder="description"
          onChange={handleChange}
          value={task.description}
          className="inp-description"
        ></textarea>
        <button className="btn-save">Save</button>
      </div>

    </form>
  );
}

export default TaskForm;
