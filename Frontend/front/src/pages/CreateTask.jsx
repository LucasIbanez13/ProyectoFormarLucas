import { useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function CreateTask() {
  const navigate = useNavigate();

  const handleCreate = async (task) => {
    await fetch("http://localhost:3000/api/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    });

    navigate("/");
  };

  return (
    <div>
      <h2>Crear Tarea</h2>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
}

export default CreateTask;
