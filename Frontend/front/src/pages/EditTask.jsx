import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const response = await fetch(`http://localhost:3000/api/tasks/${id}`);
      const data = await response.json();
      setTask(data);
    };

    fetchTask();
  }, [id]);

  const handleEdit = async (updatedTask) => {
    await fetch(`http://localhost:3000/api/tasks/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedTask),
    });

    navigate("/");
  };

  return (
    <div>
      <h2>Editar Tarea</h2>
      {task ? <TaskForm onSubmit={handleEdit} initialTask={task} /> : <p>Cargando...</p>}
    </div>
  );
}

export default EditTask;
