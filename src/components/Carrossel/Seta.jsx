import React from 'react';

export default function Seta({clique, direcao, simbol}) {
  return (
    <button onClick={clique} className={`setaSlide ${direcao}`}>{simbol}</button>
  );
}