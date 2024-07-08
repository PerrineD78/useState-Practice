import { useState } from 'react';

import Exercice from "./container/Exercice";

export default function Exercice2() {
  // 1. Crée un state qui garde en mémoire la valeur de l'input.
  // 2. Implémente une fonction pour mettre à jour la valeur du state lorsque l'utilisateur tape dans l'input.
  // 3. Passe la fonction de mise à jour au champ de texte pour qu'il soit contrôlé.
  // 4. Affiche la valeur du state sous le champ de texte.

  // J'initialise ma valeur du useState à rien
  const [inputValue, setInputValue] = useState('');

  // fonction qui modifie le input au changement
  const handleChange = (event) => {
    setInputValue(event.target.value);
  }

  return (
    <Exercice>
      <h2>Exercice 2 : Input contrôlé</h2>
      <p className="instructions">
        Modifie le composant Exercice2 pour affichez la valeur du champ de texte
        sous celui-ci.
      </p>
      <div className="solution">
        <div>
          {/* Je lie ma fonction onChange (convention) */}
          <input type="text" onChange={handleChange}/>
          <p>{inputValue}</p>
        </div>
      </div>
    </Exercice>
  );
}
