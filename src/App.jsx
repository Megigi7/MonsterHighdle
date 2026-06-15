import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import ModeMenu from './pages/ModeMenu';
import ClassicMode from './pages/ClassicMode';
import SkulletteMode from './pages/SkulletteMode';
import SilhouetteMode from './pages/SilhouetteMode';
import InfoModal from './components/InfoModal';

// Crearemos un minicomponente interno para la Cabecera.
// Hacemos esto porque 'useLocation' necesita estar DENTRO de <BrowserRouter> para funcionar.
const NavigationHeader = ({ onOpenInfo }) => {
  const location = useLocation();

  return (
    <header className="app-header">
      {/* ⬅Botón Volver al Menú: Solo se muestra si la URL NO es la raíz "/" */}
      {location.pathname !== '/' && (
        <Link 
          to="/" 
          className="back-menu-btn" 
          style={{ 
            position: 'absolute', 
            left: '0', 
            top: '50%', 
            transform: 'translateY(-50%)',
            textDecoration: 'none' // Evita que se subraye como un enlace común
          }}
        >
          ⬅ Back to menu
        </Link>
      )}

      <h1 className="game-title">MonsterHighdle</h1>

      {/* Botón de Ayuda Global */}
      <button 
        className="info-trigger-button"
        onClick={onOpenInfo}
        style={{ position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', background: 'none', border: '1px solid #ff007f', color: '#ff007f', borderRadius: '50%', width: '35px', height: '35px', cursor: 'pointer', fontWeight: 'bold' }}
      >
        ?
      </button>
    </header>
  );
};

const App = () => {
  const [isInfoOpen, setIsInfoOpen] = useState(true); // Control global del modal de info

  return (
    // 1. Envolvemos TODA la aplicación con BrowserRouter
    // Añadimos el basename para que en GitHub Pages reconozca la subcarpeta
    <BrowserRouter basename="/MonsterHighdle">
      <div className="app-container">
        
        {/* CABECERA GLOBAL (Utiliza la navegación de React Router) */}
        <NavigationHeader onOpenInfo={() => setIsInfoOpen(true)} />

        {/* CONTENIDO INTERNABLE: Ahora controlado por URLs */}
        <main className="app-main-content">
          <Routes>
            {/* Si la URL es la raíz, carga el menú de modos */}
            <Route path="/" element={<ModeMenu />} />
            
            {/* Si la URL cambia, renderiza el juego correspondiente de forma limpia */}
            <Route path="/classic" element={<ClassicMode />} />
            <Route path="/skullette" element={<SkulletteMode />} />
            <Route path="/silhouette" element={<SilhouetteMode />} />

            {/* RED DE SEGURIDAD: Si escriben cualquier otra cosa, los manda al menú principal */}
            <Route path="*" element={<ModeMenu />} />
          </Routes>
        </main>

        {/* MODAL DE INFO GLOBAL: Sigue funcionando igual */}
        <InfoModal isOpen={isInfoOpen} onClose={() => setIsInfoOpen(false)} />

        {/* Pie de página con el Disclaimer Legal */}
        <footer className="app-footer">
          <p>Disclaimer: MonsterHighdle is a free fan-made game made by a fan for fans in which I get no profit from. It's not affiliated with or endorsed by Mattel, Inc. Monster High and all related trademarks are the property of Mattel.</p>
        </footer>

      </div>
    </BrowserRouter>
  );
};

export default App;