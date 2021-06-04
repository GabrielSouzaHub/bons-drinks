import React from 'react';
import Seta from './Seta';
import Slide from './Slide';
const imgUrls = [
  "https://images5.alphacoders.com/462/thumb-1920-462280.jpg",
  "https://wallpaperaccess.com/full/1886667.jpg",
  "https://i2.wp.com/millerlite.com/sites/millerlite/files/2020-04/Miller%20Lite%20Background%203.jpg",
  "https://s1.1zoom.me/b5050/401/Drinks_Bar_Bottle_468131_1920x1080.jpg"
];

export default function Carrossel() {
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