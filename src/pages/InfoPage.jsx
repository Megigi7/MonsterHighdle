import React, { useState } from 'react';
import characters from '../data/characters.json';
import doll_lines from '../data/dollLines.json';

const InfoPage = () => {
  // Estado para saber qué sección está viendo el usuario (por defecto: 'general')
  const [activeSection, setActiveSection] = useState('general');

  return (
    <div className="info-page-layout">
      
      {/* 🧭 MENÚ LATERAL IZQUIERDO */}
      <aside className="info-sidebar">
        <button 
          className={`sidebar-btn ${activeSection === 'general' ? 'active' : ''}`}
          onClick={() => setActiveSection('general')}
        >
          🔮 General Rules
        </button>
        <button 
          className={`sidebar-btn ${activeSection === 'classic' ? 'active' : ''}`}
          onClick={() => setActiveSection('classic')}
        >
          ⚡ Classic Mode
        </button>
        <button 
          className={`sidebar-btn ${activeSection === 'skullette' ? 'active' : ''}`}
          onClick={() => setActiveSection('skullette')}
        >
          💀 Skullette Mode
        </button>
        <button 
          className={`sidebar-btn ${activeSection === 'colors' ? 'active' : ''}`}
          onClick={() => setActiveSection('colors')}
        >
          🎨 Color Meaning
        </button>
        <button 
          className={`sidebar-btn ${activeSection === 'characters' ? 'active' : ''}`}
          onClick={() => setActiveSection('characters')}
        >
          👥 Included Characters
        </button>
        <button 
          className={`sidebar-btn ${activeSection === 'doll_lines' ? 'active' : ''}`}
          onClick={() => setActiveSection('doll_lines')}
        >
          👠 Doll lines Included
        </button>
      </aside>

      {/* 📝 CONTENIDO DE LA DERECHA (Cambia dinámicamente) */}
      <section className="info-content-panel">
        
        {/* SECCIÓN: GENERAL */}
        {activeSection === 'general' && (
          <div className="info-section-block">
            <h2 className="info-section-title">MonsterHighdle - Rules</h2>
            <p>I've put together the rules I used to create the game so you can have a better gaming experience!</p>
            
            <hr className="info-page-divider" />
            
            <h3>Based on G1 Characters and Storyline</h3>
            <p><i>No hate to other generations!</i> Since I'm mainly a G1 fan, I felt more comfortable relying on the G1 data to create the game. For more specific information, check the other tabs!</p>
            
            <h4>What characters are included?</h4>
            <p>Based on the <a href="https://monsterhigh.fandom.com/wiki/Characters" target="_blank" rel="noopener noreferrer">wiki</a> G1 characters list, I've put together the most popular and recognizable characters from G1, including students, teachers, and other notable characters.</p>

          </div>
        )}

        {/* SECCIÓN: CLASSIC MODE */}
        {activeSection === 'classic' && (
          <div className="info-section-block">
            <h2 className="info-section-title">⚡ Classic Game Mode</h2>
            <p>In the classic game mode, you will have to guess a secret character based on the following fields (all data is based on G1):</p>
            
            <ul className="info-rules-list">
              <li><strong>Gender:</strong> Indicates the gender of the character.</li>
              <li><strong>Species:</strong> Indicates the type of monster or monsters if they're a hybrid.</li>
              <li><strong>First Appearance:</strong> Indicates the media in which the character first appeared.</li>
              <li>
                <strong>Nº of Dolls:</strong> Indicates the number of doll lines released for that character.
                <ul className="info-sub-list">
                    <li>Multiples releases of the same doll count as one (e.g. Draculaura's prototype, all basic doll releases and Creeproductions count as one).</li>
                    <li>Special editions like Skullector and Fang Club are included (up to June 2026).</li>
                </ul>
              </li>
              <li><strong>Hair Color:</strong> Indicates the character's signature hair color or colors if it has multiple.
                <ul className="info-sub-list">
                    <li>Different shades of the same color are not contemplated (e.g. "Purple" includes all shades of purple).</li>
                </ul>
              </li>
              <li><strong>Has pet:</strong> Indicates if the character has a pet or not.
                <ul className="info-sub-list">
                    <li>Not necessarily tied to if the character doll includes the pet (e.g. Vandala Doubloons).</li>
                </ul>
              </li>
              <li><strong>Affiliation:</strong> Institution to which the character belongs.</li>
            </ul>
          </div>
        )}

        {/* SECCIÓN: SKULLETTE MODE */}
        {activeSection === 'skullette' && (
          <div className="info-section-block">
            <h2 className="info-section-title">💀 Skullette & Silhouette Modes</h2>
            <h3>Skullette mode</h3>
            <p>Being shown a Skullette image, you have to guess which character it belongs to.<br/>The image is first shown with a black and white filter which can be deactivated to make the game easier.</p>
            
            <h3>Silhouette mode</h3>
            <p>A dark shadow of a character will be displayed. Can you recognize the ghoul or manster just by their silhouette?</p>
          </div>
        )}

        {/* SECCIÓN: COLORS */}
        {activeSection === 'colors' && (
          <div className="info-section-block">
            <h2 className="info-section-title">🎨 Color Meaning</h2>
            <p>Every time you make a guess in Classic Mode, the squares will change color to give you clues:</p>
            
            <div className="example-row">
              <div className="example-box correct">Green</div>
              <p>Perfect match! The attribute matches exactly.</p>
            </div>
            <div className="example-row">
              <div className="example-box partial">Yellow</div>
              <p>Partial match (e.g., shares a hair color or monster type).</p>
            </div>
            <div className="example-row">
              <div className="example-box incorrect">Red</div>
              <p>No match for this attribute.</p>
            </div>
          </div>
        )}

        {/* SECCIÓN: INCLUDED CHARACTERS */}
        {activeSection === 'characters' && (
          <div className="info-section-block">
            <h2 className="info-section-title">👥 Included Characters ({characters.length})</h2>
            <p>Here is the official character list included in the game. Use it to check correct name spellings if you get stuck!</p>
            
            {/* Cuadrícula mapeada directamente desde tu JSON */}
            <div className="characters-grid">
              {characters.map((char, index) => (
                <div key={char.id || index} className="character-card">
                  <img 
                    src={char.image} 
                    alt={char.name} 
                    className="character-card-img"
                  />
                  <span className="character-card-name">{char.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SECCIÓN: DOLL LINES INCLUDED */}
        {activeSection === 'doll_lines' && (
          <div className="info-section-block">
            <h2 className="info-section-title">👠 Doll lines Included ({doll_lines.length})</h2>
            <p>Here is the official doll lines list included in the game.</p>
            
            {/* Cuadrícula mapeada directamente desde tu JSON */}
            <div className="doll_lines-grid">
              {/* {doll_lines.map((line, index) => (
                <div key={line.id || index} className="character-card">
                  <img 
                    src={line.image} 
                    alt={line.name} 
                    className="character-card-img"
                  />
                  <span className="character-card-name">{char.name}</span>
                </div>
              ))} */}
            </div>
          </div>
        )}


      </section>

    </div>
  );
};

export default InfoPage;