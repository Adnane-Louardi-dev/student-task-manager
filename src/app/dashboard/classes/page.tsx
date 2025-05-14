'use client';
import React, { useState } from 'react';
import './page.css';

const Page = () => {
  const [classes, setClasses] = useState<{ name: string; details: string }[]>([]);
  const [selectedName, setSelectedName] = useState('');
  const [selectedDetails, setSelectedDetails] = useState('');

  const handleAddClass = () => {
    if (selectedName && selectedDetails) {
      setClasses([...classes, { name: selectedName, details: selectedDetails }]);
      setSelectedName('');
      setSelectedDetails('');
    }
  };

  const handleDeleteClass = (index: number) => {
    setClasses(classes.filter((_, i) => i !== index));
  };

  const handleEditClass = (index: number) => {
    const classToEdit = classes[index];
    setSelectedName(classToEdit.name);
    setSelectedDetails(classToEdit.details);
    handleDeleteClass(index); // Delete the class so we can update it
  };

  return (
    <div className="page-container">
      <h1 className="title">Classes</h1>

      <div className="form">
        <select value={selectedName} onChange={(e) => setSelectedName(e.target.value)}>
          <option value="">-- Sélectionner un nom de classe --</option>
          <option value="Systèmes d'exploitation">Systèmes d'exploitation</option>
          <option value="Architecture des ordinateurs">Architecture des ordinateurs</option>
          <option value="Base de données">Base de données</option>
          <option value="Théorie des langages">Théorie des langages</option>
          <option value="Programmation orientée objet (POO)">Programmation orientée objet (POO)</option>
          <option value="Réseaux informatiques">Réseaux informatiques</option>
          <option value="Probabilités et Statistiques">Probabilités et Statistiques</option>
          <option value="Analyse numérique">Analyse numérique</option>
        </select>

        <select value={selectedDetails} onChange={(e) => setSelectedDetails(e.target.value)}>
          <option value="">-- Sélectionner les détails de la classe --</option>
          <option value="Cours + TP chaque semaine - Salle 3.10">Cours + TP chaque semaine - Salle 3.10</option>
          <option value="Enseignant: M. Haddad - Examen final 60%">Enseignant: M. Haddad - Examen final 60%</option>
          <option value="Projet obligatoire à rendre fin semestre">Projet obligatoire à rendre fin semestre</option>
          <option value="Travail en groupe de 2 à 3 étudiants">Travail en groupe de 2 à 3 étudiants</option>
          <option value="Utilisation de Linux et du terminal">Utilisation de Linux et du terminal</option>
          <option value="Contenu: SQL, relationnel, sous-interrogation">Contenu: SQL, relationnel, sous-interrogation</option>
          <option value="Langage utilisé: C++ et Python">Langage utilisé: C++ et Python</option>
          <option value="Évaluation continue + projet pratique">Évaluation continue + projet pratique</option>
        </select>

        <button onClick={handleAddClass}>Ajouter la classe</button>
      </div>

      <div className="class-list">
        {classes.map((cls, index) => (
          <div key={index} className="class-card">
            <h3>{cls.name}</h3>
            <p>{cls.details}</p>
            <div className="class-actions">
              <button className="edit-button" onClick={() => handleEditClass(index)}>Modifier</button>
              <button className="delete-button" onClick={() => handleDeleteClass(index)}>Supprimer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Page;