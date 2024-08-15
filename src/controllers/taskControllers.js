import Task from "../models/Task.js";

export const allTask = async () => {
  let requestTask = await Task.find();
  return requestTask;
};

export const createTask = async (title, description, completed) => {
  let requestCreateTask = await Task.create({ title, description, completed });
  return requestCreateTask;
};

