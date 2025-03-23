import { useEffect, useState } from "react";
import { fetchTasks } from "../services/fetchTasks";
import TaskItem from "./TaskItem";

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const data = await fetchTasks();
      setTasks(data);
    };
    getTasks();
  }, []);

  return (
    <div>
      <h2>Lista de Tareas</h2>
      <ul>
        {tasks.length > 0 ? (
          tasks.map((task) => <TaskItem key={task.id} task={task} />)
        ) : (
          <p>No hay tareas disponibles</p>
        )}
      </ul>
    </div>
  );
}

export default TaskList;
