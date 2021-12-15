import React, { useState } from 'react';
import { GuardarNota } from '../dataBase/FireStore';

const NoteForm = () => {
  const [estadoNotaTexto, setEstadoNotaTexto] = useState('');

  const handleCambiarTexto = (e) => {
    setEstadoNotaTexto(e.target.value);
  };

  return (
    <div>
      <textarea
        onChange={handleCambiarTexto}
        value={estadoNotaTexto}
        name="description"
        className="form-control"
        placeholder="Escribe el contenido de tu nota"
      />
      <br />
      <br />
      <button
        className="botones"
        type="submit"
        onClick={() => {
          GuardarNota(estadoNotaTexto);
        }}
      >
        Guardar Nota
      </button>
      <hr />
    </div>

  );
};
export default NoteForm;
