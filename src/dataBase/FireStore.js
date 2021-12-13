import { db } from './secrets';
// mandar objeto a firebase aqui

export const GuardarNota = (texto) => db.collection('publicaciones').doc().set({
  texto,
});

export const handleGetNota = () => db.collection('publicaciones');
