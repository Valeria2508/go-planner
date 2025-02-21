// src/components/Home.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './home.module.css';
import mapImage from '../assets/mapa_med.png';

const Home = () => {
  const [selectedCity, setSelectedCity] = useState('Medellín');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleCitySelect = (city) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  return (
    <div className={styles.homeContainer}>
      <header className={styles.header}>
        <h1 className={styles.logo}>GoPlanner</h1>
        <nav>
          <ul className={styles.navMenu}>
            <li onClick={() => navigate('/detail')}>Detalles</li>
          </ul>
        </nav>
      </header>

      <main className={styles.mainContent}>
        <h2 className={styles.welcome}>Bienvenido viajero</h2>

        <div className={styles.mapContainer}>
          <button 
            className={styles.dropdown} 
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Tu aventura en {selectedCity} ▼
          </button>
          
          {isDropdownOpen && (
            <ul className={styles.dropdownMenu}>
              <li onClick={() => handleCitySelect('Medellín')}>Medellín</li>
              <li onClick={() => handleCitySelect('Cali')}>Cali</li>
              <li onClick={() => handleCitySelect('Cartagena')}>Cartagena</li>
            </ul>
          )}

          <img src={mapImage} alt="Mapa de Medellín" className={styles.mapImage} />
        </div>

        <div className={styles.tripSummary}>
          <h3 className={styles.resumen}>Resumen del viaje</h3>
          <ul className={styles.summaryList}>
            <li>Distancia total: <strong>1,000 km 📏</strong></li><br></br>
            <li>Duración: <strong>3 días📅</strong></li><br></br>
            <li>Eventos destacados: <strong>4</strong> ⭐</li>
          </ul>
        </div>

        <button 
          className={styles.exploreButton} 
          onClick={() => navigate('/daybyday')}
        >
          📅 Explorar itinerario día a día
        </button>
      </main>
    </div>
  );
};

export default Home;