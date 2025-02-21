// src/components/StopDetail.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Detail.module.css';
import img1 from '../assets/hotel1.png';
import img2 from '../assets/hotel2.png';
import img3 from '../assets/hotel3.png';

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>Home</button>
        <h1 className={styles.title}>Detalle de Parada</h1>
        <button className={styles.shareButton}>Itinerario</button>
      </header>

      <div className={styles.card}>
        <p><strong>📌 Itinerario Completo y Preciso:</strong> Medellin-Colombia</p>
        <p><strong>📅 Fechas:</strong> Jueves 6 de marzo - Sábado 8 de marzo</p>
        <p><strong>📍 Distancia total:</strong> ~7,200 km</p>
        <p><strong>⏰ Horas de manejo:</strong> ~50 h (promedio 5-8h por día)</p>
        <p><strong>🏞️ Enfoque:</strong> Historia, cultura, gastronomía, naturaleza y aventura.</p>
        <p><strong>🎉 Eventos Especiales:</strong></p>
        <ul>
          <li>Provenza (6 marzo)</li>
          <li>Parque norte (8 de marzo)</li>
        </ul>

        <h1 className={styles.dayButton}>Día 1</h1>

        <div className={styles.imageGallery}>
          <img src={img1} alt="Lugar 1" className={styles.image} />
          <img src={img2} alt="Lugar 2" className={styles.image} />
          <img src={img3} alt="Lugar 3" className={styles.image} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
