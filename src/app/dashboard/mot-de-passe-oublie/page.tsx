'use client'
 

import React, { useState } from 'react';
import './page.css'
import Link from 'next/link';
function motdepasseoublie() {
    const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check if the email exists in localStorage
    const userData = JSON.parse(localStorage.getItem(email) || '{}');
    
    if (!userData || Object.keys(userData).length === 0) {
      setError("Cet email n'existe pas.");
    } else {
      setError('');
      alert("Un email a été envoyé pour récupérer votre mot de passe.");
      // Proceed to password reset logic or show success message
    }
    
}
    

    return (
        <div className='container'>
            <div className='centercontainer'>
            <p className='title'>trouvez votre compte</p>
            <hr className='firstline'></hr>
            <p className='paragraph'>Veuillez entrer votre e-mail  pour rechercher votre compte.</p>
            <form onSubmit={handleSubmit}>
          <input 
            type='email' 
            placeholder="email" 
            className="Email" 
            required 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} // Bind email state
          />
          {error && <p style={{color: 'red'}}>{error}</p>}  {/* Display error message if email does not exist */}
            <hr/>
            <div className='buttons'>
               <button type='submit' className='btnone'>confirmer</button>
               <Link href={"/dashboard/log-in"}>
                <button className='btntwo'>annuler</button>
               </Link>
               
            </div>
         </form>
    </div>
 </div>
    )
}
export default motdepasseoublie;