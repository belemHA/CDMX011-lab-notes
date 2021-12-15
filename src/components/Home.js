import React from 'react';
import ImprimirNotas from './ImprimirNotas';
import Title from './Title';
import Salir from './Salir';
import NoteForm from './NoteForm';
import CrearNotas from './CrearNotas';

const Home = () => (
  <div className="App">
    <div id="encabezado">
      <Title />
    </div>
    <div>
      <Salir />
    </div>
    <div className="center"><NoteForm /></div>
    <div className="NotasPrint"><ImprimirNotas /></div>
    <CrearNotas />
  </div>
);

export default Home;
