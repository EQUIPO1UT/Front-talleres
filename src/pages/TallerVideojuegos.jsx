import React from 'react';
import { Link } from 'react-router-dom';
import './Talleres.css';

const TallerVideojuegos = () => {
  return (
    <div className="taller-container">
      <div className="taller-card">
        <img src="/videojuegos.jpg" alt="Videojuegos" className="taller-imagen" />

        <h2>Taller de Videojuegos</h2>
        <p>
          En este taller aprenderás a crear videojuegos desde cero utilizando motores de desarrollo líderes en la industria como Unity y Unreal Engine.
          A lo largo del curso, trabajarás tanto individual como colaborativamente en proyectos que te permitirán entender conceptos de programación orientada a objetos, diseño de niveles, mecánicas de juego, inteligencia artificial básica y publicación de tu propio juego.
        </p>
        <p>
          No necesitas experiencia previa; comenzamos desde los fundamentos. Sin embargo, si ya tienes conocimientos, también podrás profundizar en sistemas más avanzados como físicas personalizadas, efectos visuales y scripting en C# y Blueprints.
          Tendrás acceso a licencias académicas, recursos exclusivos y asesoría de expertos en la industria.
        </p>
        <p>
          Al finalizar, presentarás un proyecto final jugable que puede incluirse en tu portafolio profesional. También recibirás una constancia oficial de participación.
        </p>

        <div className="taller-info-extra">
          <h4>📍 Ubicación:</h4>
          <p>Edificio C, Aula 204, Facultad de Ingeniería.</p>
          <h4>📝 ¿Cómo unirse?</h4>
          <p>
            Dirígete a la Coordinación Académica de Actividades Complementarias o inscríbete a través del formulario oficial publicado en el portal de estudiantes antes del 10 de julio.
          </p>
        </div>

        <div className="volver-btn">
          <Link to="/">
            <button>← Volver al inicio</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TallerVideojuegos;
