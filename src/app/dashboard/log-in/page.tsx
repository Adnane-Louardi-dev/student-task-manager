'use client';
import React, { useEffect, useState } from 'react';
import './page.css';

function Login() {
  const [rememberMe, setRememberMe] = useState(false);

  // Check if "remember me" info is in localStorage when the component mounts
  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    const savedPassword = localStorage.getItem('password');

    if (savedEmail && savedPassword) {
      // Automatically fill the form if data is found
      document.getElementById('email').value = savedEmail;
      document.getElementById('password').value = savedPassword;
      setRememberMe(true); // Keep the checkbox checked
    }
  }, []);

  // Handle login form submission
  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = form.elements['email'].value;
    const password = form.elements['password'].value;

    const storedUser = localStorage.getItem(email);

    if (!storedUser) {
      alert("Cet email n'existe pas.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (user.password !== password) {
      alert("Mot de passe incorrect.");
      return;
    }

    // If "Remember me" is checked, store the credentials in localStorage
    if (rememberMe) {
      localStorage.setItem('email', email);
      localStorage.setItem('password', password);
    } else {
      localStorage.removeItem('email');
      localStorage.removeItem('password');
    }

    alert("Connexion réussie !");
    // redirect or set session logic here
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  return (
    <div className='forme'>
      <form onSubmit={handleLogin} className='formulaire'>
        <h2>Se connecter</h2>
        <label htmlFor='email'>Email:</label>
        <input type='email' name='email' id='email' required placeholder='Entrez votre email' />

        <label htmlFor='password'>Mot de passe:</label>
        <input type='password' name='password' id='password' required placeholder='Entrez votre mot de passe' />

        <label htmlFor="subscribe">
          <input
            type="checkbox"
            id="rememberpassword"
            name="rememberpassword"
            checked={rememberMe}
            onChange={handleCheckboxChange}
          />
          Se souvenir de moi?
        </label>

        <button type='submit'>Connexion</button>
        <p className='p'>Pas encore de compte ? <a href='sign-in'>Créer un compte</a></p>
        <a href='./mot-de-passe-oublie'className='forgotpassword'>mot de passe oublié?</a>
      </form>
    </div>
  );
}

export default Login;