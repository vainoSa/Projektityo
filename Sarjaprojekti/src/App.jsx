import { HashRouter, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import Lista from './Katselulista.jsx';
import Haku from './Haku.jsx';
import Tiedot from './Tiedot.jsx';
import './App.css'
import {useState, useEffect} from "react";

function App() {

  // Katselulistan tietojen päivittämistä varten oleva useState hook, joka palauttaa tallennetun katselulistan jos sellainen on olemassa.
  

  const[katselulista, setKatselulista] = useState(() => {
    try {
      const tallennettuLista = localStorage.getItem("katselulista");

      if (tallennettuLista) {
        const lista = JSON.parse(tallennettuLista);
        return Array.isArray(lista) ? lista : [];
      }
      return [];
    } catch (error) {
      console.error("Virhe ladattaessa katselulistaa:", error);
      return [];
    }
  });

  // Katselulistan tallentamista varten oleva useEffect hook

  useEffect(() => {
    try {
      localStorage.setItem("katselulista", JSON.stringify(katselulista));
    } catch (error) {
      console.error("Katselulistan tallennus epäonnistui:", error);
    }
  }, [katselulista]);

  // Funktio sarjan lisäykseen, tarkistetaan myös onko sarja jo listassa

  function lisaaKatselulistaan(sarja) {
    setKatselulista((nykyinenLista) => {
      const loytyyJo= nykyinenLista.some((tallennettuSarja) => tallennettuSarja.id === sarja.id);
      if (loytyyJo) {
        return nykyinenLista;
      }
      return [...nykyinenLista, {id: sarja.id, name: sarja.name, image: sarja.image}];
    });
  }

  // Funktio sarjan poistamiseen listalta

  function poistaSarja(id) {
    setKatselulista((nykyinenLista) => nykyinenLista.filter((sarja) => sarja.id !== id));
  }
  return (

    // Sovelluksen navigaatio ja reititys
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
        <Route path="/tiedot" element={<Tiedot lisaaSarja={lisaaKatselulistaan} />} />
        <Route path="/tiedot/:id" element={<Tiedot lisaaSarja={lisaaKatselulistaan} />} />
        <Route path="/katselulista" element={<Lista katselulista={katselulista} poistaSarja={poistaSarja} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

    </HashRouter>
   
  )


}

export default App
