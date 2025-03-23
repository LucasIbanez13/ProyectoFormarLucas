import { useState } from "react";

function TaskForm({ onSubmit, initialTask = { name: "", description: "" } }) {
  const [task, setTask] = useState(initialTask);

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={task.name} onChange={handleChange} placeholder="Nombre de la tarea" required />
      <input type="text" name="description" value={task.description} onChange={handleChange} placeholder="Descripción" required />
      <button type="submit">Guardar</button>
    </form>
  );
}

export default TaskForm;
