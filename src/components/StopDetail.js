import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const StopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h2>Detalle de Parada</h2>
      <p>Información detallada de la parada {id}</p>
      <button onClick={() => navigate(-1)}>Volver</button>
    </div>
  );
};

export default StopDetail;
