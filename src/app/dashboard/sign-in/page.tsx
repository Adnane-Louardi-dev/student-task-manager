'use client';
import React from 'react';
import './page.css';

function Join() {
  const handlChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const forme = e.currentTarget;

    const nom = forme.elements["nom"].value;
    const prenom = forme.elements["prenom"].value;
    const email = forme.elements["email"].value;
    const password = forme.elements["password"].value;
    const confpassword = forme.elements["confpassword"].value;

    if (password !== confpassword) {
      alert("Le mot de passe et la confirmation ne correspondent pas !");
      return;
    }
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

  if (!passwordRegex.test(password)) {
    alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.");

    return;
  }
const code = forme.elements["code"].value;

const codeRegex = /^\d{8}$/;

if (!codeRegex.test(code)) {
  alert("Le code appogée doit contenir exactement 8 chiffres.");
  return;
}
    // Proceed with submission logic
    console.log({ nom, prenom, email, password });
  };

  return (
    <div className='forme'>
      <form onSubmit={handlChange} className='formulaire'>
        <label htmlFor='nom'>Nom:</label>
        <input type='text' id='nom' name='nom' placeholder='Entrer votre Nom' required />

        <label htmlFor='prenom'>Prénom:</label>
        <input type='text' name='prenom' id='prenom' placeholder='Entrer votre Prénom' required />
        <label htmlFor='codeapogee'> code apogée:</label>
        <input type='number' name='code' id='codeapogee' placeholder='entrez ton code appogee' required/>
        

        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' id='email' placeholder='Entrer votre Email' required />

        <label htmlFor='password'>Mot de passe:</label>
        <input type='password' id='password' name='password' placeholder='Entrer un mot de passe' required />

        <label htmlFor='confpassword'>Confirmer mot de passe:</label>
        <input type='password' id='confpassword' name='confpassword' placeholder='Entrer ton mot de passe encore' required />

        <label htmlFor='birthdate'>Date de naissance:</label>
        <input type='date' name='birthdate' id='birthdate' required />

        <button type='submit'>Enregistrer</button>
        <p className='p'>already have an account? <a href="log-in">sign in</a></p>
      </form>
      
    </div>

  );
}

export default Join;