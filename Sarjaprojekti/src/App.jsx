import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Lista from './Katselulista.jsx';
import Haku from './Haku.jsx';
import Tiedot from './Tiedot.jsx';
import './App.css'

function App() {
  
  return (
    <HashRouter>
      <nav className="navbar1" aria-label="Päänavigaatio">
        <NavLink to="/" className="navlogo">
          Sarjahaku🎬
        </NavLink>

        <div className="navlinkit">
          <NavLink to="/" className="navlinkki" end>Haku</NavLink>

          <NavLink to="/tiedot" className="navlinkki">Sarjan tiedot</NavLink>

          <NavLink to="/katselulista" className="navlinkki">Katselulista</NavLink>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Haku />} />
        <Route path="/tiedot" element={<Tiedot />} />
        <Route path="/katselulista" element={<Lista />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </HashRouter>
   
  )


}

export default App
