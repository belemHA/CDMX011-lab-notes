/* eslint-disable react/prop-types */
import React from 'react';

const Notita = ({ nota, id }) => {
  console.log(id);
  return (
    <div>
      <h1>Notita</h1>
      <p key={nota.id}>{nota.texto}</p>
    </div>
  );
};
export default Notita;
