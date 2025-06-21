import React from 'react';
import './Talleres.css';
import { Link } from 'react-router-dom';

function TallerArte() {
  return (
    <div className="taller-container">
      <div className="taller-card">
        <img
          src="/arte.jpg"
          alt="Taller de Arte"
          className="taller-imagen"
        />
        <h2>Taller de Arte</h2>
        <p>
          En este taller explorarás diferentes técnicas artísticas como dibujo, pintura al óleo,
          acuarela y técnicas mixtas. No importa tu nivel de experiencia, lo importante es tu
          interés por expresarte visualmente.
        </p>
        <p>
          El taller fomenta la creatividad individual mediante ejercicios prácticos y proyectos
          grupales. Se proveerán algunos materiales básicos, aunque se recomienda llevar tus propios utensilios.
        </p>
        <p>
          Este taller está dirigido a cualquier persona interesada en el arte como medio de
          desarrollo personal y expresión.
        </p>
        <div className="taller-info-extra">
          <h4>Ubicación:</h4>
          <p>Edificio C, Aula 3</p>
          <h4>Cómo unirse:</h4>
          <p>Regístrate en línea o acude directamente el día de inicio con materiales básicos de dibujo.</p>
        </div>
        <div className="volver-btn">
          <Link to="/"><button>Volver</button></Link>
        </div>
      </div>
    </div>
  );
}

export default TallerArte;
