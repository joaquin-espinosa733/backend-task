import {
  allTask,
  createTask,
  deleteTask,
  editTask
} from "../controllers/taskControllers.js";

export const allTaskHandler = async (req, res) => {
  try {
    const taskResponse = await allTask();
    res.status(200).json(taskResponse);
  } catch (error) {
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
    res.status(500).json({
      message: "Error al crear la terea",
      error: error.message,
    });
  }
};

export const deleteTaskHandler = async (req, res) => {
  const { id } = req.params;
  try {
    const deleteTaskResponse = await deleteTask(id);
    res.status(200).send("Tarea eliminada");
  } catch (error) {
    res.status(500).json({
      message: "Error al eliminar la terea",
      error: error.message,
    });
  }
};

export const editTaskHandler = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedTask = await editTask(id, updatedData);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({
      message: "Error al editar la tarea",
      error: error.message,
    });
  }
};
