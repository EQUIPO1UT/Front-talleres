import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TallerVideojuegos from './pages/TallerVideojuegos';
import TallerRobotica from './pages/TallerRobotica';
import TallerAplicaciones from './pages/TallerAplicaciones';

const avisos = [
  '¡Inscripciones abiertas hasta el 10 de julio!',
  'Cupo limitado en el Taller de Robótica.',
  'Taller de Aplicaciones incluye certificado oficial.'
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
  }
];

function Home() {
  return (
    <div className="app fade-in">
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

      <footer className="footer">
        <button>Ver más talleres</button>
      </footer>
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
      </Routes>
    </Router>
  );
}

export default App;
