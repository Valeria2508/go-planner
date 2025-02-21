import React, { useState } from 'react';
import styles from './daybyday.module.css';
import { useNavigate } from 'react-router-dom';

const Itinerario = () => {
  const [activeDay, setActiveDay] = useState(null);
  const navigate = useNavigate();

  const itineraryData = [
    {
      day: 1,
      date: "Jueves 6 de marzo",
      activities: [
        "📍08:00am Llegada al hotel Dann Carlton",
        "🥓09:00am Desayuno en el hotel",
        "📍11:0am  Comuna 13",
        "🥗01:00pm Almuerzo en el hotel",
        "🌍02:00pm Recorrido Parque Explora",
        "🧁04:00pm Picnic Jardín botánico",
        "📍06:00pm Regreso al hotel: Cambio de ropa",
        "🛕07:00pm Cena restaurante Carolina",
        "😎08:30pm Rumba discoteca Perro Negro",
        "😴02:00am Regreso al hotel: Descanso"
      ]
    },
    {
      day: 2,
      date: "Viernes 7 de marzo",
      activities: [
        "🥓09:00am Desayuno en el hotel",
        "📍11:0am  Parque norte",
        "🥗02:00pm Almuerzo en parque norte",
        "👙05:00pm Regreso al hotel: piscina y jacuzzi",
        "🥡07:00pm Cena en el hotel",
        "🎤08:00pm Karaoke: Actividad en el hotel",
      ]
    },
    {
      day: 3,
      date: "Sábado 8 de marzo",
      activities: [
        "🥓09:00am Desayuno en el hotel",
        "📍11:0am  Pueblito paisa",
        "🥗01:00pm Almuerzo en pueblito paisa",
        "📍03:00pm Santa fé de Antioquia",
        "🥩06:00pm Cena en restaurante El español",
        "🏨010:00pm Regreso al hotel",
        "👌03:00pm Fin del intinerario",
      ]
    },
    // ... resto del data
  ];

  const toggleDay = (day) => {
    if (activeDay === day) {
      setActiveDay(null);
    } else {
      setActiveDay(day);
    }
  };

  return (
    <div className={styles.itineraryContainer}>
      <div className={styles.itineraryHeader}>
        <h1>Itinerario Día a día: Aventura en Medellín!</h1>
        <button onClick={() => navigate('/home')}>Home</button>
        <button onClick={() => navigate('/detail')}>Detalle</button>
        <p className={styles.itineraryDates}>del 6 al 8 de marzo</p>
      </div>
      <div>
        <p>
        📌 Itinerario Completo y Preciso: Medellin-Colombia <br></br>
        📅 Fechas: jueves 6 de marzo - sábado 8 de marzo <br></br>
        🕒 Horas de manejo: ~ 48 h (promedio 5h por día) <br></br>
        🎯 Enfoque: Historia, cultura, gastronomía, naturaleza y aventura. <br></br>
        🏀 Eventos Especiales: Discoteca Perro Negro (6 marzo), Cena (7 marzo), pueblito paisa (8marzo)
         <br></br>
        </p>
        <p>
          <strong>Nota:</strong> Este itinerario puede variar según la disponibilidad de lugares y actividades en cada día.
        </p>
      </div>
      
      {itineraryData.map((dayData) => (
        <div key={dayData.day} className={styles.dayContainer}>
          <button 
            className={`${styles.dayButton} ${activeDay === dayData.day ? styles.active : ''}`}
            onClick={() => toggleDay(dayData.day)}
          >
            <span className={styles.dayTitle}>
              Día {dayData.day}: {dayData.date}
            </span>
            <span className={`${styles.arrow} ${activeDay === dayData.day ? styles.up : styles.down}`}>
              ▼
            </span>
          </button>
          
          {activeDay === dayData.day && (
            <div className={styles.activitiesContainer}>
              <ul>
                {dayData.activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
      
      <p className={styles.instructionText}>
        Haz clic en cada día para extraer o contraer los detalles del itinerario
      </p>
    </div>
  );
};

export default Itinerario;