import React, { useContext } from 'react';

import { FamilyContext } from '../App';
import Parents from './Parents';
import Siblings from './Siblings';

// state managament - local state vs global state
// redux, mobx(observere), zustand
export default function FamilyTree() {
  // consume data from context using the context hook 😁
  const value = useContext(FamilyContext);
  console.log(value);
  const handleClick = () => {
    value.setHeader('Parental units');
  };

  return (
    <section className="FamilyTree">
      <h1>{value.family.familyName}</h1>
      <h2>{value.header}</h2>

      <button onClick={handleClick}>Change Header</button>

      {/* Pass value down as a prop */}
      <Parents family={value.family} />

      <div className="spacer" />
      <h2>Siblings</h2>

      {/* Siblings will consume data from Context using render props 🤮 */}
      <Siblings />
    </section>
  );
}
