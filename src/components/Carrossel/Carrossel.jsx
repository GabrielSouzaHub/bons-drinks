import React from 'react';
import Seta from './Seta';
import Slide from './Slide';
const imgUrls = [
  "https://images.unsplash.com/photo-1530730459653-e0edd4c6072e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1491&q=80",
  "https://images.unsplash.com/photo-1488551511020-571c741f122a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1547514701-418e31cbb328?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1603042293225-e7d880f97d46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1267&q=80"
];

export default function Carrossel({ }) {
  const qtdImg = (imgUrls.length - 1);
  const [indImg, setindImg] = React.useState(0);
  function proxImg() {
    const result = indImg === qtdImg;
    const proxIndex = result ? 0 : indImg + 1;
    setindImg(proxIndex);
  }
  function anterImg() {
    const result = indImg === 0;
    const anterIndex = result ? qtdImg : indImg - 1;
    setindImg(anterIndex);
  }
  return (
    <div className="carrossel">
      <Seta clique={anterImg} direcao="esquerda" simbol="&#9664;" />
      <Slide linkImg={imgUrls[indImg]} />
      <Seta clique={proxImg} direcao="direita" simbol="&#9654;" />
    </div>
  )
}