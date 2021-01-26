import React from 'react';

import { FamilyContext } from '../App';

// Render props pattern
// Inside JSX, call a function that returns more JSX
const Siblings = () => {
  return (
    <FamilyContext.Consumer>
      {(value) => {
        return (
          <section className="parents">
            {value.family.siblings.map((p) => (
              <div className="person" key={p.name}>
                <img width="150" src={p.img} alt={p.name} />
                <strong>{p.name}</strong>
              </div>
            ))}
          </section>
        );
      }}
    </FamilyContext.Consumer>
  );
};

export default Siblings;
