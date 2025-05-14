"use client";

import React, { useState } from "react";
import  styles  from "./add.module.css";

export default function AddPage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("type", type);
    formData.append("description", description);
    formData.append("deadline", deadline);
    if (file) formData.append("file", file);

    await fetch("http://localhost:5000/api/tasks", {
      method: "POST",
      body: formData,
    });

    alert("Tâche ajoutée avec succès !");
  };

  return (
    <form onSubmit={handleSubmit} className={styles["form-container"]}>
      <h2>Ajouter une Tâche</h2>

      <input
        type="text"
        placeholder="Nom de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <select value={type}   onChange={(e) => setType(e.target.value)}>
        
        <option value="PDF">PDF</option>
        <option value="TD">TD</option>
        <option value="TP">TP</option>
         <option value="OROJET">Projet</option>
          <option value="TTASK">Task</option>
      </select>

      <textarea
        placeholder="Description de la tâche"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={4}
      />

      <input
        type="date"
        value={deadline}
        onChange={(e) => setDeadline(e.target.value)}
      />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files?.[0] || null)}
        required
      />

      <button type="submit">Ajouter</button>
    </form>
  );
}