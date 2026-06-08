import React, { useState } from 'react';
import ModeMenu from './modes/ModeMenu';
import ClassicMode from './modes/ClassicMode';
import SkulleteMode from './modes/SkulleteMode';
import SilhouetteMode from './modes/SilhouetteMode';
import InfoModal from './components/InfoModal'; // Traemos el modal aquí

const App = () => {
  const [currentMode, setCurrentMode] = useState('menu');
  const [isInfoOpen, setIsInfoOpen] = useState(true); // Control global del modal de info

  return (
    <div className="app-container" style={{ minHeight: '100vh', backgroundColor: '#050505', color: 'white', padding: '20px', boxSizing: 'border-box' }}>
      
      {/* CABECERA GLOBAL: Visible en toda la app */}
      <header style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', maxWidth: '600px', margin: '0 auto 30px auto' }}>
        
        {/* Botón Volver al Menú (Solo si no estamos ya en el menú) */}
        {currentMode !== 'menu' && (
          <button 
            className="back-menu-btn" 
            onClick={() => setCurrentMode('menu')}
            style={{ position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)' }}
          >
            ⬅ Menú
          </button>
        )}

        <h1 className="game-title">MonsterHighdle</h1>

        {/* Botón de Ayuda Global */}
        <button 
          className="info-trigger-button"
          onClick={() => setIsInfoOpen(true)}
          style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', background: 'none', border: '1px solid #ff007f', color: '#ff007f', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          ?
        </button>
      </header>

      {/* CONTENIDO INTERNABLE (Cambia según el modo) */}
      <main>
        {currentMode === 'menu' && <ModeMenu onSelectMode={setCurrentMode} />}
        {currentMode === 'classic' && <ClassicMode />}
        {currentMode === 'skullete' && <SkulleteMode />}
        {currentMode === 'silhouette' && <SilhouetteMode />}
      </main>

      {/* MODAL DE INFO GLOBAL: Se puede abrir desde cualquier parte */}
      <InfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      {/* Pie de página con el Disclaimer Legal */}
      <footer style={{ textAlign: 'center', marginTop: '50px', fontSize: '11px', color: '#555', padding: '10px' }}>
        <p>MonsterHighdle es un juego gratuito hecho por fans para fans. No está afiliado, respaldado ni asociado con Mattel, Inc. Monster High y todas las marcas relacionadas son propiedad de Mattel.</p>
      </footer>

    </div>
  );
};

export default App;