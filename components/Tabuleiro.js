import React from 'react';
import Casa from './Casa';


const Tabuleiro = () => {
  const renderCasa = (linha, coluna) => {
    const casaEscura = (linha % 2 === 0 && coluna % 2 === 0) || (linha % 2 !== 0 && coluna % 2 !== 0);
    return <Casa key={`${linha}-${coluna}`} escura={casaEscura} />;
  };

  const renderLinha = (linha) => {
    const casas = [];
    for (let coluna = 0; coluna < 8; coluna++) {
      casas.push(renderCasa(linha, coluna));
    }
    return <div key={linha} className="linha">{casas}</div>;
  };

  const linhas = [];
  for (let linha = 0; linha < 8; linha++) {
    linhas.push(renderLinha(linha));
  }

  return <div className="tabuleiro">{linhas}</div>;
};

export default Tabuleiro;
