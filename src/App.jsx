import React, { useState } from 'react';
import ModeMenu from './pages/ModeMenu';
import ClassicMode from './pages/ClassicMode';
import SkulletteMode from './pages/SkulletteMode';
import SilhouetteMode from './pages/SilhouetteMode';
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
        {currentMode === 'skullette' && <SkulletteMode />}
        {currentMode === 'silhouette' && <SilhouetteMode />}
      </main>

      {/* MODAL DE INFO GLOBAL: Se puede abrir desde cualquier parte */}
      <InfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

      {/* Pie de página con el Disclaimer Legal */}
      <footer style={{ textAlign: 'center', marginTop: '50px', fontSize: '11px', color: '#555', padding: '10px' }}>
        <p>Disclaimer: MonsterHighdle is a free fan-made game made by a fan for fans in which I get no profit from. It's not affiliated with or endorsed by Mattel, Inc. Monster High and all related trademarks are the property of Mattel.</p>
      </footer>

    </div>
  );
};

export default App;