// src/components/StopDetail.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Detail.module.css';
import img1 from '../assets/hotel1.png';
import img2 from '../assets/hotel2.png';
import img3 from '../assets/hotel3.png';
import img4 from '../assets/exp1.png';
import img5 from '../assets/exp2.png';
import img6 from '../assets/exp3.png';
import p1 from '../assets/p1.png';
import p2 from '../assets/p2.png';
import p3 from '../assets/p3.png';

const images = [img1, img2, img3, img4, img5, img6];

const Detail = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton} onClick={() => navigate(-1)}>Home</button>
        <h1 className={styles.title}>Detalle de Parada</h1>
        <button className={styles.shareButton} onClick={() => navigate(-1)} >Día a día</button>
      </header>

      <div className={styles.card}>
      <img className={styles.maps}
    src={require('../assets/maps-hotel.png')} 
    alt="maps hotel" 
  />


        <h1 className={styles.dayButton}>Día 1</h1>

        <div className={styles.imageGallery}>
          <img src={img1} alt="Lugar 1" className={styles.image} />
          <img src={img2} alt="Lugar 2" className={styles.image} />
          <img src={img3} alt="Lugar 3" className={styles.image} />
        </div>
        <div>
          <h2>Hotel Dann Carlton 🏨</h2>
          <p>Dirección: Cra. 43A #7-50, El Poblado, Medellín, El Poblado, Medellín, Antioquia</p>
          <p>Teléfono: (604) 4445151</p> 
          <p>El Hotel Dann Carlton Medellín es un prestigioso establecimiento de 5 estrellas situado en el corazón de la ciudad, específicamente en la zona de El Poblado. Este hotel se destaca por ofrecer una combinación de lujo, confort y una ubicación estratégica para quienes visitan Medellín.</p>
        </div>
        <img className={styles.maps}
    src={require('../assets/maps-explora.png')} 
    alt="maps hotel" 
  />
        <h1 className={styles.dayButton}>Parque Explora</h1>
        <div className={styles.imageGallery}>
          <img src={img4} alt="Lugar 1" className={styles.image} />
          <img src={img5} alt="Lugar 2" className={styles.image} />
          <img src={img6} alt="Lugar 3" className={styles.image} />
        </div>
        <div>
          <h2>Parque Explora 🏨</h2>
          <p>Dirección:Cra. 52 #7375, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia</p>
          <p>Teléfono: (604) 5168300</p>
          <p>El Parque Explora es un destacado museo interactivo de ciencias ubicado en Medellín, Colombia. Reconocido como el centro científico más visitado del país, es símbolo de transformación social y educativa. 

<br></br><br></br>
Entre sus principales atracciones se encuentran:

Acuario de Medellín <br></br>

Planetario<br></br>
Exploratorio<br></br>

Salas Interactivas<br></br> <br></br>

El Parque Explora se ha consolidado como un espacio donde la educación, la cultura y la diversión convergen, ofreciendo a sus visitantes una experiencia enriquecedora y memorable.</p>
        </div>
        <h1 className={styles.dayButton}>Día 2</h1>
        <img className={styles.maps}
    src={require('../assets/maps norte.png')} 
    alt="maps hotel" 
  />
  <h1 className={styles.dayButton}>Parque norte</h1>
  <div className={styles.imageGallery}>
          <img src={p1} alt="Lugar 1" className={styles.image} />
          <img src={p2} alt="Lugar 2" className={styles.image} />
          <img src={p3} alt="Lugar 3" className={styles.image} />
          
        </div>
        <div>
        <h2>Parque Norte </h2>
        <p>Dirección:Cra. 53 #76-115, Aranjuez, Medellín, Aranjuez, Medellín, Antioquia</p>
        <p>Teléfono: (604) 3401210</p>
        <p>El Parque Norte es un espacio de recreación y cultura que se encuentra en el centro de Medellín, Colombia. Este parque se caracteriza por su gran cantidad de áreas verdes y la diversidad de plantas y flora que se encuentran allí.</p>
      </div>
      </div>
    </div>
  );
};

export default Detail;
