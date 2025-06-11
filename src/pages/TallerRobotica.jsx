import React from 'react';
import './Talleres.css';
import { Link } from 'react-router-dom';

function TallerRobotica() {
  return (
    <div className="taller-container">
      <div className="taller-card">
        <img
          src="/robotica.jpg"
          alt="Taller de Robótica"
          className="taller-imagen"
        />
        <h2>Taller de Robótica con Arduino</h2>
        <p>
          Este taller te introduce al fascinante mundo de la robótica a través del uso
          de placas Arduino. Aprenderás a conectar sensores, controlar motores y crear
          proyectos físicos interactivos.
        </p>
        <p>
          A lo largo del curso trabajarás en proyectos como brazos robóticos, vehículos autónomos
          y sistemas de control. Además, desarrollarás habilidades de programación en C/C++ y lógica electrónica.
        </p>
        <p>
          No necesitas conocimientos previos, solo ganas de aprender y construir.
        </p>
        <div className="taller-info-extra">
          <h4>Ubicación:</h4>
          <p>Edificio B, Laboratorio de Electrónica</p>
          <h4>Cómo unirse:</h4>
          <p>Inscríbete en línea y preséntate el día del taller con tu comprobante de inscripción.</p>
        </div>
        <div className="volver-btn">
          <Link to="/"><button>Volver</button></Link>
        </div>
      </div>
    </div>
  );
}

export default TallerRobotica;
