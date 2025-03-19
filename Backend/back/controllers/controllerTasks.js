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


};
