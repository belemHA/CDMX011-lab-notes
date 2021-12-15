import React from 'react';
import { useNavigate } from 'react-router-dom';

const Salir = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/login');
  };
  return (
    <div>
      <button
        className="botones"
        type="submit"
        onClick={handleSubmit}
      >
        salir
      </button>
    </div>
  );
};
export default Salir;
