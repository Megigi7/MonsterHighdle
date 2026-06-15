import React from 'react';
import { Link } from 'react-router-dom'; // ◄ Importamos la herramienta de navegación

const ModeMenu = () => {
  return (
    <div style={{ textAlign: 'center', paddingTop: '100px', paddingBottom: '5px' }}>
      <h1 className="game-title" style={{ fontSize: '50px', marginBottom: '40px' }}>MonsterHighdle</h1>
      <p style={{ color: '#aaa', fontSize: '18px' }}>Elige tu modo de juego de hoy:</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', maxWidth: '350px', margin: '0 auto', marginTop: '30px' }}>
        
        {/* Usamos 'to' en lugar de 'onClick' para indicar la URL */}
        <Link to="/classic" className="menu-btn" style={{ textDecoration: 'none' }}>
          ⚡ Classic
        </Link>
        
        <Link to="/skullette" className="menu-btn" style={{ textDecoration: 'none' }}>
          💀 Skullette
        </Link>
        
        <Link to="/silhouette" className="menu-btn" style={{ textDecoration: 'none' }}>
          🎀 Silhouette
        </Link>

      </div>
    </div>
  );
};

export default ModeMenu;