import Task from "../models/Task.js";

export const allTask = async () => {
  let requestTask = await Task.find();
  return requestTask;
};

export const createTask = async (title, description, completed) => {
  let requestCreateTask = await Task.create({ title, description, completed });
  return requestCreateTask;
};

export const deleteTask = async (id) => {
  let requestDeleteTask = await Task.deleteOne({ _id: id });
  return requestDeleteTask;
};

export const editTask = async (id, updatedData) => {
  const { title, description, completed } = updatedData;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      id,
      { title, description, completed },
      { new: true }
    );
    return updatedTask;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const findByTaskOne = async (id) => {
  const findTaks = await Task.findById(id);
  return findTaks;
};
