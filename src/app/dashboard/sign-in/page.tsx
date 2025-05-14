'use client';
import React from 'react';
import './page.css';



function Join() {
  const handleChange = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    const nom = form.elements["nom"].value;
    const prenom = form.elements["prenom"].value;
    const email = form.elements["email"].value;
    const password = form.elements["password"].value;
    const confpassword = form.elements["confpassword"].value;
    const code = form.elements["code"].value;
    const birthdateValue = form.elements["birthdate"].value;

    // Check if the names contain numbers
    const nameRegex = /^[A-Za-zÀ-ÿ\s'-]+$/;

if (!nameRegex.test(nom)) {
  alert("Le nom ne doit contenir que des lettres.");
  return;
}
if (!nameRegex.test(prenom)) {
  alert("Le prénom ne doit contenir que des lettres.");
  return;
}

    if (password !== confpassword) {
      alert("Le mot de passe et la confirmation ne correspondent pas !");
      return;
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(password)) {
      alert("Le mot de passe doit contenir au moins 8 caractères, une majuscule et un chiffre.");
      return;
    }

    const codeRegex = /^\d{8}$/;
    if (!codeRegex.test(code)) {
      alert("Le code apogée doit contenir exactement 8 chiffres.");
      return;
    }

    const birthdate = new Date(birthdateValue);
    const today = new Date();
    const age = today.getFullYear() - birthdate.getFullYear();
    const monthDiff = today.getMonth() - birthdate.getMonth();

    if (
      age < 17 ||
      (age === 17 && monthDiff < 0) ||
      (age === 17 && monthDiff === 0 && today.getDate() < birthdate.getDate())
    ) {
      alert("Vous devez avoir au moins 17 ans pour vous inscrire.");
      return;
    }

    // Check if email already exists
    if (localStorage.getItem(email)) {
      alert("Cet email est déjà utilisé.");
      return;
    }

    // Save user to localStorage
    const userData = { nom, prenom, email, password, code, birthdate: birthdateValue };
    localStorage.setItem(email, JSON.stringify(userData));
    localStorage.setItem("prenom", prenom);
   



    alert("Compte créé avec succès !");
    window.location.href = "/dashboard";
  };

  return (
    <div className='forme'>
      <form onSubmit={handleChange} className='formulaire'>
        <label htmlFor='nom'>Nom:</label>
        <input type='text' id='nom' name='nom' placeholder='Entrer votre Nom' required />

        <label htmlFor='prenom'>Prénom:</label>
        <input type='text' name='prenom' id='prenom' placeholder='Entrer votre Prénom' required />

        <label htmlFor='codeapogee'>Code apogée:</label>
        <input type='number' name='code' id='codeapogee' placeholder='Entrez votre code apogée' required/>

        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' id='email' placeholder='Entrer votre Email' required />

        <label htmlFor='password'>Mot de passe:</label>
        <input type='password' id='password' name='password' placeholder='Entrer un mot de passe' required />

        <label htmlFor='confpassword'>Confirmer mot de passe:</label>
        <input type='password' id='confpassword' name='confpassword' placeholder='Confirmer votre mot de passe' required />

        <label htmlFor='birthdate'>Date de naissance:</label>
        <input type='date' name='birthdate' id='birthdate' required />

        <button type='submit'>Enregistrer</button>
        <p className='p'>Vous avez déjà un compte ? <a href="./log-in">Se connecter</a></p>
      </form>
    </div>
  );
}

export default Join;