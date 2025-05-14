"use client";
import styles from "./style.module.css"
import Head from "next/head";



const data = {
  tds: [
    { id: 1, titre: 'TD 1 : Fonctions', description: 'Exercices sur les fonctions mathématiques' },
    { id: 2, titre: 'TD 2 : Algèbre', description: 'Matrices et systèmes linéaires' },
    { id: 3, titre: 'TD 3 : Javascript', description: 'Les fontions ' },
  ],
  
  tps: [
    { id: 1, titre: 'TP 1 : Python de base', description: 'Introduction à Python en console' },
    { id: 2, titre: 'TP 2 : Fichiers Python', description: 'Lire/écrire des fichiers' },
    { id: 3, titre: 'TP 3 : C++', description: 'Les classes' },
  ]
};

export default function Page() {
  const handleDownload = (type, id) => {
    alert(`${type.toUpperCase()} ${id} téléchargé.`);
  };

  const handleView = (type, id) => {
    alert(`Affichage de ${type.toUpperCase()} ${id}.`);
  };

  return (
    <>
      <Head>
        <title>TDs & TPs</title>
      </Head>
      <main className={styles.container}>
        <h1 className={styles.title}>Liste des Travaux Dirigés (TDs) et Travaux Pratiques (TPs)</h1>

        <section className={styles.section}>
          <h2>Travaux Dirigés (TDs)</h2>
          {data.tds.map((td) => (
            <div key={td.id} className={styles.item}>
              <div>
                <strong>{td.titre}</strong>
                <span>{td.description}</span>
              </div>
              <div className={styles.buttons}>
                <button className={styles.button} onClick={() => handleView('TD', td.id)}>Voir</button>
                <button className={styles.button} onClick={() => handleDownload('TD', td.id)}>Télécharger</button>
              </div>
            </div>
          ))}
        </section>

        <section className={styles.section}>
          <h2>Travaux Pratiques (TPs)</h2>
          {data.tps.map((tp) => (
            <div key={tp.id} className={styles.item}>
              <div>
                <strong>{tp.titre}</strong>
                <span>{tp.description}</span>
              </div>
              <div className={styles.buttons}>
                <button className={styles.button} onClick={() => handleView('TP', tp.id)}>Voir</button>
                <button className={styles.button} onClick={() => handleDownload('TP', tp.id)}>Télécharger</button>
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}