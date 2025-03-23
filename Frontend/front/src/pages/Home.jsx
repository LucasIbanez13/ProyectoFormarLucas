import { Link } from "react-router-dom";
import TaskList from "../components/TasksLists";

function Home() {
  return (
    <div>
      <h1>Gestor de Tareas</h1>
      <Link to="/create">Crear Nueva Tarea</Link>
      <TaskList />
    </div>
  );
}

export default Home;
