import React, { useState } from 'react';
import styles from './daybyday.module.css';

const DayByDay = () => {
  const [activeDay, setActiveDay] = useState(null);

  const toggleDay = (day) => {
    setActiveDay(activeDay === day ? null : day);
  };

  const itinerary = [
    {
      day: 'Jueves 6 de marzo',
      activities: [
        { time: '08:00 am', description: 'Llegada al hotel Dann Carlton' },
        { time: '09:00 am', description: 'Desayuno en el hotel' },
        { time: '11:00 am', description: 'Parada 1: Comuna 13' },
      ],
    },
    {
      day: 'Viernes 7 de marzo',
      activities: [
        { time: '08:00 am', description: 'Visita al Parque Explora' },
        { time: '12:00 pm', description: 'Almuerzo en restaurante local' },
      ],
    },
  ];

  return (
    <div className={styles.container}>
      <h2>Itinerario Día a Día</h2>
      {itinerary.map((day, index) => (
        <div key={index} className={styles.day}>
          <button onClick={() => toggleDay(index)} className={styles.button}>
            {day.day}
          </button>
          {activeDay === index && (
            <ul className={styles.activities}>
              {day.activities.map((activity, i) => (
                <li key={i} className={styles.activity}>
                  <span>{activity.time}</span> - <span>{activity.description}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default DayByDay;

