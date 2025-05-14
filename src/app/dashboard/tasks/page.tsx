'use client'
import React, { useState, useEffect } from "react";
import {DataTable, schema} from "@/components/data-table";
import excistedTasks from "@/app/dashboard/tasks.json";
import {z} from "zod";

interface Task {
  id: string;
  title: string;
  done: boolean;
}
export default function Page() {
  const [tasks, setTasks] = useState<z.infer<typeof schema>[]>(excistedTasks);
  const [newTask, setNewTask] = useState<string>("");

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }
  }, [tasks]);

  const handleToggle = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: "completed" } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const newTaskObject: z.infer<typeof schema> = {
      id: Date.now(),
      taskName: newTask.trim(),
      type: 'TD',
      status: 'not started',
      dueDate: Date.toString(),
      priority: "high",
    };
    setTasks([...tasks, newTaskObject]);
    setNewTask("");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-6">Mes Tâches</h1>
      <ul className="list-none">
        {tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between mb-4 p-3 border rounded shadow-md"
          >
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.status === "completed"}
                onChange={() => handleToggle(task.id)}
                className="mr-4"
              />
              <span className={task.status === "completed" ? "line-through text-gray-500" : ""}>
                {task.taskName}
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className="flex mt-6">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Ajouter une nouvelle tâche"
          className="border px-4 py-2 w-full rounded-l-md"
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-600 text-white px-4 py-2 rounded-r-md"
        >
          Ajouter
        </button>
      </div>
      <DataTable data={tasks} />
    </div>
  );
}