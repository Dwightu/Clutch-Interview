import { Task } from "../models/Tasks.js";

export async function getTasks(req, res) {
    try {
      const tasks = await Task.findAll({
        attributes: ["id", "projectId", "name", "done"],
        order: [["id", "DESC"]],
      });
      res.json(tasks);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }