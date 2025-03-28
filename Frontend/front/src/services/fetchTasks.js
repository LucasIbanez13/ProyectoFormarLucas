export const fetchTasks = async () => {
  try {
    const response = await fetch("http://localhost:3000/api/tasks");
    const data = await response.json();
    console.log("Datos recibidos desde la API:", data); // 👀 LOG
    return data;
  } catch (error) {
    console.error("Error en fetchTasks:", error);
    return [];
  }
};

