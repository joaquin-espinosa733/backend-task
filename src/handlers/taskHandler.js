import { allTask, createTask } from "../controllers/taskControllers.js";

export const allTaskHandler = async (req, res) => {
  try {
    const taskResponse = await allTask();
    res.status(200).json(taskResponse);
  } catch (error) {
    console.error("Error al obtener las tareas:", error);
    res.status(500).json({
      message: "Error al obtener las tareas. Inténtalo de nuevo más tarde.",
      error: error.message,
    });
  }
};

export const createTaskHandler = async (req, res) => {
  const { title, description, completed } = req.body;
  try {
    const createTaskResponse = await createTask(title, description, completed);
    res.status(200).json(createTaskResponse);
  } catch (error) {
    console.error("Error al crear la tarea:", error);
    res.status(500).json({
      message: "Error al crear la terea",
      error: error.message,
    });
  }
};
