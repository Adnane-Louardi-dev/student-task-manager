'use client';
import {useState} from "react";

export default function NoteMoyen(){
    const [moyen, setMoyen]=useState(0)
    const [etudiants, setEtudiants]=useState([{
        nom:'sara', note:14
    },{
        nom:'yassine', note:12
    },{
        nom:'adnane', note:10
    }])
    const calculateMoyen=()=>{
        let notes=etudiants.map((etudiants)=>etudiants.note)
        let sommeDesNotes=0;
        for (let i=0;i<notes.length;i++){
            sommeDesNotes+=notes[i];
        }
        let moyen=sommeDesNotes/notes.length
        console.log(moyen)
        setMoyen(moyen);
    }
    return(
        <div>
        <h1>List des etudiants</h1>

            {etudiants.map((etudiant)=>(
                <>
                <p>{etudiant.nom} - {etudiant.note}</p>
                </>
            ))}

            <button className={'bg-gray-400'} onClick={calculateMoyen}> Calculer la moyen</button>

            <h1>Moyenne: {moyen.toFixed(2)}</h1>
        </div>
    )
}