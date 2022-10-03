import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

function TaskList() {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteTask(id));
  };

  return (
    <div>
      <header className="tasks-length">
        <h1>Tasks {tasks.length}</h1>
        <Link to={"/create-task"} className="link-create">Create task</Link>
      </header>

      <div className="tasks-map">

        {tasks.map((task) => (
          <div key={task.id}>
          <div className="tasks-info">
            <h3>{task.title}</h3>
            <p>{task.description}</p>
          </div>
            <div className="buttons">
              <button onClick={() => handleDelete(task.id)} className="btn-delete">Delete</button>
              <Link to={`/edit-task/${task.id}`} className="link-edit">Edit</Link>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default TaskList;
