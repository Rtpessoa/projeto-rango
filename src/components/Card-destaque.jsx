import seta from "../assets/icons/seta-direita.png";
import "../styles/card-destaque.css"

function CardDestaque({imagem, titulo}) {
  return (
    <div className="container-card-destaque">
      <img className="imagem-card-destaque" src={imagem} alt={titulo} />
      <a className="link-descricao">
        <span>{titulo}</span>
        <img src={seta} alt="seta para direita" />
      </a>
    </div>
  );
}

export default CardDestaque;
