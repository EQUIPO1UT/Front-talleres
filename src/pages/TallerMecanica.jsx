import React from 'react';
import './Talleres.css';
import { Link } from 'react-router-dom';

function TallerMecanica() {
  return (
    <div className="taller-container">
      <div className="taller-card">
        <img
          src="/mecanica.jpg"
          alt="Taller de Mecánica"
          className="taller-imagen"
        />
        <h2>Taller de Mecánica</h2>
        <p>
          Este taller está diseñado para introducirte en el mundo de la mecánica automotriz. Aprenderás
          conceptos básicos de motores, sistemas de frenos, suspensión, y mantenimiento preventivo.
        </p>
        <p>
          Las sesiones incluirán teoría y práctica con herramientas reales, desmontaje de piezas, y
          simulación de fallas comunes en vehículos.
        </p>
        <p>
          Ideal para estudiantes interesados en la ingeniería, la tecnología aplicada y los oficios técnicos.
        </p>
        <div className="taller-info-extra">
          <h4>Ubicación:</h4>
          <p>Edificio F, Taller de Ingeniería 003</p>
          <h4>Cómo unirse:</h4>
          <p>Acude al Departamento de Tecnología antes del 1 de agosto para apartar tu lugar.</p>
        </div>
        <div className="volver-btn">
          <Link to="/"><button>Volver</button></Link>
        </div>
      </div>
    </div>
  );
}

export default TallerMecanica;
