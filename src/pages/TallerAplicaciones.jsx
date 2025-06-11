import React from 'react';
import './Talleres.css';
import { Link } from 'react-router-dom';

function TallerAplicaciones() {
  return (
    <div className="taller-container">
      <div className="taller-card">
        <img
          src="/apps.jpg"
          alt="Taller de Aplicaciones"
          className="taller-imagen"
        />
        <h2>Taller de Aplicaciones Móviles</h2>
        <p>
          En este taller aprenderás a desarrollar aplicaciones móviles modernas utilizando
          frameworks como React Native y Flutter. Comenzaremos desde los conceptos básicos
          de diseño UX/UI hasta el desarrollo funcional de apps completas.
        </p>
        <p>
          Además, conocerás cómo trabajar con bases de datos en tiempo real, implementar
          autenticación de usuarios, usar APIs REST y desplegar tu app en tiendas digitales
          como Google Play y App Store.
        </p>
        <p>
          Es ideal para estudiantes interesados en programación móvil, diseño digital y
          desarrollo de productos.
        </p>
        <div className="taller-info-extra">
          <h4>Ubicación:</h4>
          <p>Edificio C, Aula 204</p>
          <h4>Cómo unirse:</h4>
          <p>Dirígete al Departamento de Tecnología con tu credencial de estudiante antes del 10 de julio.</p>
        </div>
        <div className="volver-btn">
          <Link to="/"><button>Volver</button></Link>
        </div>
      </div>
    </div>
  );
}

export default TallerAplicaciones;
