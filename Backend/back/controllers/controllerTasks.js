const Tasks = require('../data/Tasks');
let tasks = [];
let taskId = 1;

module.exports = {
  // Mostrar todas las tareas
  getTasks: (req, res) => {
    try {
      console.table(tasks);
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener las tareas" });
    }
  },

  // Crear
  createTask: (req, res) => {
    try {
      const { name, description } = req.body;
      if (!name || !description) {
        return res.status(400).json({ error: "El nombre y la descripción son obligatorios." });
      }

      const newTask = new Tasks({ id: taskId++, name, description });
      
      tasks.push(newTask);

      res.status(201).json({ message: 'Tarea creada exitosamente', task: newTask });

    } catch (error) {
      console.error("Error en createTask:", error);
      res.status(500).json({ error: "Ocurrió un error." });
    }
  },
  // Editar
  updateTask: (req, res) => {
    try {
      const { id } = req.params;
      const { name, description } = req.body;
  
      const taskIndex = tasks.findIndex(task => task.id == id);
  
      if (taskIndex === -1) {
        return res.status(404).json({ error: "Tarea no encontrada." });
      }
  
      if (name) tasks[taskIndex].name = name.trim();
      if (description) tasks[taskIndex].description = description.trim();
  
      res.json({ message: "Tarea actualizada", task: tasks[taskIndex] });
  
    } catch (error) {
      console.error("Error en updateTask:", error);
      res.status(500).json({ error: "Ocurrió un error al actualizar la tarea." });
    }
  },
    // Eliminar
    deleteTask: (req, res) => {
      try {
        const { id } = req.params;
  
        const taskIndex = tasks.findIndex(task => task.id == id);
    
        if (taskIndex === -1) {
          return res.status(404).json({ error: "Tarea no encontrada." });
        }
    
        const deletedTask = tasks.splice(taskIndex, 1)[0];
    
        res.json({ message: "Tarea eliminada exitosamente", task: deletedTask });
    
      } catch (error) {
        console.error("Error en deleteTask:", error);
        res.status(500).json({ error: "Ocurrió un error al eliminar la tarea." });
      }
    }
  

};
