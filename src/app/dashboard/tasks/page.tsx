


/* pour les tasks evety les mouuuuucles pour chaque class  */
/* export default function Page() {  ))à)))   àààà       --(((((((())))))))
  return (
    <h1>page tasks</h1>  */
   /* export default function Page() {
  return ( 
    <h1>page tasks</h1> */
    'use client'
 import React, { useState, useEffect } from "react";
 
interface Task {
  id: string;
  title: string;
  done: boolean;
}

export default function Page() {
  const [tasks, setTasks] = useState<Task[]>([]);
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

  const handleToggle = (id: string) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, done: !task.done } : task
    );
    setTasks(updatedTasks);
  };

  const handleAddTask = () => {
    if (!newTask.trim()) return;
    const newTaskObject: Task = {
      id: Date.now().toString(),
      title: newTask.trim(),
      done: false,
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
                checked={task.done}
                onChange={() => handleToggle(task.id)}
                className="mr-4"
              />
              <span className={task.done ? "line-through text-gray-500" : ""}>
                {task.title}
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
    </div>
  );
}