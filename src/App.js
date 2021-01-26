import { useState, createContext } from 'react';
import { data } from './data';
import FamilyTree from './components/FamilyTree';

import './App.css';

export const FamilyContext = createContext();

function App() {
  const [families] = useState(data);
  const [activeFamily, setActiveFamily] = useState(families[0]);
  const [header, setHeader] = useState('Parents');

  return (
    <div className="App">
      <section className="header">
        <h1>Family Trees</h1>
        {families.map((d) => (
          <button
            className={`family-button ${
              d.familyName === activeFamily.familyName && 'active'
            }`}
            key={d.familyName}
            onClick={() => setActiveFamily(d)}
          >
            {d.familyName}
          </button>
        ))}
      </section>
      {/* {activeFamily && <FamilyTree family={activeFamily} />} */}
      {activeFamily && (
        <FamilyContext.Provider
          value={{ family: activeFamily, header, setHeader }}
        >
          <FamilyTree />
        </FamilyContext.Provider>
      )}
    </div>
  );
}

export default App;
