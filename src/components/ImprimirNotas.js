import React, { useEffect, useState } from 'react';
import { db } from '../dataBase/secrets';
import { handleGetNota } from '../dataBase/FireStore';
import Notita from './Notita';

const ImprimirNotas = () => {
  // crear un state
  const [estadoInicial, setNuevoEstado] = useState([]);
  useEffect(() => {
    handleGetNota(); // handleGetNota().onSnapshot y lo demas el
    // el arreglo lo metes en el state
    const getNotes = async () => {
      await db.collection('publicaciones').onSnapshot((onSnapshot) => {
        const data = onSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNuevoEstado(data);
      });
    };
    getNotes();
  }, []);
  console.log(estadoInicial);
  // hacer un console.log() del state que creaste
  return (
    <div>
      {estadoInicial.map((nota) => <Notita nota={nota} key={nota.id} id={nota.id} />)}
    </div>
  );
};
export default ImprimirNotas;
