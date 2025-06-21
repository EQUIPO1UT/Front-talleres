import React from 'react';
import './Talleres.css';
import { Link } from 'react-router-dom';

function TallerCeramica() {
  return (
    <div className="taller-container">
      <div className="taller-card">
        <img
          src="/ceramica.jpg"
          alt="Taller de Cerámica"
          className="taller-imagen"
        />
        <h2>Taller de Cerámica</h2>
        <p>
          Aprende a modelar, esmaltar y crear piezas únicas de cerámica. Este taller combina
          arte y técnica para ayudarte a dominar las bases del trabajo con barro.
        </p>
        <p>
          Desde el amasado hasta la cocción, pasarás por cada etapa para entender
          el proceso artesanal completo. Incluye prácticas guiadas y materiales.
        </p>
        <p>
          Abierto a todos los niveles de experiencia, ideal para quienes disfrutan del arte
          manual y la creatividad.
        </p>
        <div className="taller-info-extra">
          <h4>Ubicación:</h4>
          <p>Edificio D, Aula 106</p>
          <h4>Cómo unirse:</h4>
          <p>Regístrate con el Departamento de Artes antes del 20 de julio.</p>
        </div>
        <div className="volver-btn">
          <Link to="/"><button>Volver</button></Link>
        </div>
      </div>
    </div>
  );
}

export default TallerCeramica;
