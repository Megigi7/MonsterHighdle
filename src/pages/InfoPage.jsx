import React from 'react';

const InfoPage = () => {
  return (
    <div className="info-page-wrapper">
      <div className="info-container">
      
        <div className="info-header">
          <h2>MonsterHighdle - Rules</h2>
          <p>I've put together the rules I used to create the game so you can have a better gaming experience!</p>
          <hr />
        </div>

        <div className="info-body">
          <h3>Based on G1 Characters and Storyline</h3>
          <p><i>No hate to other generations!</i> Since I'm mainly a G1 fan, I felt more comfortable relying on the G1 data to create the game. For more specific information, keep reading!</p>
          

          <h4>What characters are included?</h4>
          <p>Based on the <a href="https://monsterhigh.fandom.com/wiki/Characters" target="_blank" rel="noopener noreferrer">wiki</a> G1 characters list I've put together the most popular and recognizable characters from G1, including students, teachers, and other notable characters.</p>

          <h4>Classic game mode - Fields</h4>
          <p>In the classic game mode, you will have to guess a secret character based on the following fields:</p>
          <p><i>All data is based on G1</i></p>
          <ul>
            <li><strong>Gender:</strong> Indicates the gender of the character.</li>
            <li><strong>Species:</strong> Indicates the type of monster or monsters if they're a hybrid.</li>
            <li><strong>First Appearance:</strong> Indicates the media in which the character first appeared.</li>
            <li>
              <strong>Nº of Dolls:</strong> Indicates the number of doll lines released for that character.
              <ul style={{ marginTop: '5px', paddingLeft: '20px', fontSize: '13px', color: '#ccc' }}>
                  <li>Multiples releases of the same doll count as one (e.g. Draculaura's prototype, all basic doll releases and Creeproductions count as one).</li>
                  <li>Special editions like Skullector and Fang Club are included (up to June 2026).</li>
              </ul>
            </li>
            <li><strong>Hair Color:</strong> Indicates the character's signature hair color or colors if it has multiple. 
              <ul style={{ marginTop: '5px', paddingLeft: '20px', fontSize: '13px', color: '#ccc' }}>
                  <li>Different shades of the same color are not contemplated (e.g. "Purple" includes all shades of purple).</li>
              </ul>
            </li>
            <li><strong>Has pet:</strong> Indicates if the character has a pet or not. 
              <ul style={{ marginTop: '5px', paddingLeft: '20px', fontSize: '13px', color: '#ccc' }}>
                  <li>Not necessarily tied to if the character doll includes the pet (e.g. Vandala Doubloons).</li>
              </ul>
            </li>
            <li><strong>Affiliation:</strong> Institution to which the character belongs.</li>
          </ul>

          <hr />

          <h4>Skullette game mode</h4>
          <p>Being shown a Skullette image, you have to guess which character it belongs to.<br/>The image is first shown with a black and white filter which can be deactivated to make the game easier.</p>


          <h3>Color meaning:</h3>
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


          <p style={{ fontSize: '12px', color: '#888', marginTop: '40px' }}>
            <i>Disclaimer: MonsterHighdle is a free fan-made game made by a fan for fans in which I get no profit from. It's not affiliated with or endorsed by Mattel, Inc. Monster High and all related trademarks are the property of Mattel.</i>
          </p>
    
        </div>

      </div>
    </div>
  );
};

export default InfoPage;