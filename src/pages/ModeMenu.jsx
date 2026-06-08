import React from 'react';

const ModeMenu = ({ onSelectMode }) => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '5px' }}>
      <h1 className="game-title" style={{ fontSize: '50px', marginBottom: '40px' }}>MonsterHighdle</h1>
      <p style={{ color: '#aaa', fontSize: '18px' }}>Elige tu modo de juego de hoy:</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '350px', margin: '0 auto', marginTop: '30px' }}>
        <button className="menu-btn" onClick={() => onSelectMode('classic')}>
          ⚡ Classic
        </button>
        <button className="menu-btn" onClick={() => onSelectMode('skullette')}>
          💀 Skullette
        </button>
        <button className="menu-btn" onClick={() => onSelectMode('silhouette')}>
          🎀 Silhouette
        </button>
      </div>
    </div>
  );
};

export default ModeMenu;