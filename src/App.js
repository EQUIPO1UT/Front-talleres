import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import TallerVideojuegos from './pages/TallerVideojuegos';
import TallerRobotica from './pages/TallerRobotica';
import TallerAplicaciones from './pages/TallerAplicaciones';
import TallerArte from './pages/TallerArte.jsx';
import TallerCeramica from './pages/TallerCeramica.jsx';
import TallerMecanica from './pages/TallerMecanica.jsx';

const avisos = [
  '¡Inscripciones abiertas hasta el 10 de julio!',
  'Cupo limitado en el Taller de Robótica.',
  'Taller de Aplicaciones incluye certificado oficial.'
];

const imagenesInfo = [
  {
    src: 'slider1',
    texto: 'Descubre tu creatividad con nuestros talleres artísticos'
  },
  {
    src: 'slider2',
    texto: 'Aprende tecnología aplicada de forma divertida'
  },
  {
    src: 'slider3',
    texto: 'Explora nuevas habilidades este semestre'
  }
];

const talleres = [
  {
    titulo: 'Taller de Videojuegos',
    fecha: '5 Julio',
    descripcion: 'Aprende a desarrollar videojuegos desde cero usando Unity y Unreal Engine.',
    imagen: '/videojuegos.jpg',
    ruta: '/videojuegos'
  },
  {
    titulo: 'Taller de Robótica',
    fecha: '12 Julio',
    descripcion: 'Descubre el mundo de la robótica con Arduino.',
    imagen: '/robotica.jpg',
    ruta: '/robotica'
  },
  {
    titulo: 'Taller de Aplicaciones',
    fecha: '20 Julio',
    descripcion: 'Diseña y programa aplicaciones móviles con React Native y Flutter.',
    imagen: '/apps.jpg',
    ruta: '/aplicaciones'
  },
  {
    titulo: 'Taller de Arte',
    fecha: '25 Julio',
    descripcion: 'Explora técnicas de dibujo, pintura y creatividad expresiva.',
    imagen: '/arte.jpg',
    ruta: '/arte'
  },
  {
    titulo: 'Taller de Cerámica',
    fecha: '28 Julio',
    descripcion: 'Aprende modelado, esmaltado y técnicas de alfarería moderna.',
    imagen: '/ceramica.jpg',
    ruta: '/ceramica'
  },
  {
    titulo: 'Taller de Mecánica',
    fecha: '2 Agosto',
    descripcion: 'Conoce el mantenimiento, reparación y ensamblaje de motores.',
    imagen: '/mecanica.jpg',
    ruta: '/mecanica'
  }
];

function Home() {
  const [indiceActual, setIndiceActual] = useState(0);

  const avanzar = () => {
    setIndiceActual((prev) => (prev + 1) % imagenesInfo.length);
  };

  const retroceder = () => {
    setIndiceActual((prev) =>
      prev === 0 ? imagenesInfo.length - 1 : prev - 1
    );
  };

  useEffect(() => {
    const intervalo = setInterval(avanzar, 5000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <div className="app fade-in">
      {/* Carrusel con animación deslizante */}
      <section className="slider-container">
        <div
          className="slider-track"
          style={{ transform: `translateX(-${indiceActual * 100}%)` }}
        >
          {imagenesInfo.map((img, idx) => (
            <div className="slide" key={idx}>
              <img src={`/${img.src}.jpg`} alt={`slide-${idx}`} />
              <div className="slider-text">
                <h2>{img.texto}</h2>
              </div>
            </div>
          ))}
        </div>

        {/* Flechas */}
        <button className="slider-btn left" onClick={retroceder}>❮</button>
        <button className="slider-btn right" onClick={avanzar}>❯</button>

        {/* Puntitos */}
        <div className="slider-dots">
          {imagenesInfo.map((_, i) => (
            <span
              key={i}
              className={`dot ${i === indiceActual ? 'active' : ''}`}
              onClick={() => setIndiceActual(i)}
            />
          ))}
        </div>
      </section>

      {/* Ticker de avisos */}
      <div className="ticker">
        <div className="ticker-content">
          {avisos.map((aviso, idx) => (
            <span key={idx}>{aviso} &nbsp;•&nbsp;</span>
          ))}
        </div>
      </div>

      <header className="titulo">
        <h1>Talleres</h1>
        <p>Participa en actividades prácticas este semestre.</p>
      </header>

      <section className="grid">
        {talleres.map((taller, index) => (
          <div className="card hover-grow" key={index}>
            <img src={taller.imagen} alt={taller.titulo} />
            <div className="card-info">
              <span className="fecha">{taller.fecha}</span>
              <h3>{taller.titulo}</h3>
              <p>{taller.descripcion}</p>
              <Link to={taller.ruta}>
                <button>Más info</button>
              </Link>
            </div>
          </div>
        ))}
      </section>

      {/* Footer sin botón */}
      <footer className="footer" />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videojuegos" element={<TallerVideojuegos />} />
        <Route path="/robotica" element={<TallerRobotica />} />
        <Route path="/aplicaciones" element={<TallerAplicaciones />} />
        <Route path="/arte" element={<TallerArte />} />
        <Route path="/ceramica" element={<TallerCeramica />} />
        <Route path="/mecanica" element={<TallerMecanica />} />
      </Routes>
    </Router>
  );
}

export default App;
