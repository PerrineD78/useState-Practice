import { useState } from 'react';

import Exercice from "./container/Exercice";

export default function Exercice3() {
  // 1. Crée un state pour suivre l'état de visibilité du texte.
  // 2. Implémente une fonction pour basculer a l'état contraire ! .
  // 3. Passe la fonction de toggle au bouton.
  // 4. Affiche ou masque le texte en fonction de l'état de visibilité.

const [visible, setVisible] = useState(true);

const handleClickInvisible = () => {
  setVisible(!visible)
};

  return (
    <Exercice>
      <h2>Exercice 3 : Toggle</h2>
      <p className="instructions">
        Modifie le composant Exercice3 pour basculer entre "Afficher" et
        "Masquer" un texte.
      </p>
      <div className="solution">
        <div>
          <button onClick={handleClickInvisible}>Afficher/Masquer</button>
          {/* 5. Affiche conditionnellement le paragraphe en fonction de l'état */}
          {/* <p>{visible ? "Texte à afficher" : "masquer"}</p> */}
          {/* Deuxième façon d'écrire */}
          {visible &&<p> Texte à afficher/masquer </p>}
        </div>
      </div>
    </Exercice>
  );
}
