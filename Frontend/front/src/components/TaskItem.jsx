import { Link } from "react-router-dom";

function TaskItem({ task }) {
  return (
    <li>
      <strong>{task.name}</strong>: {task.description}  
      <Link to={`/edit/${task.id}`}>Editar</Link>
    </li>
  );
}

export default TaskItem;
