import "../styles/card.css";
import avatar from "../assets/icons/avatar.png"
import relogio from "../assets/icons/relogio.png"


function Card({imagem, classificacao, nome, descricao, preco, tempo, reviews}) {

  return (
    <div className="card-refeicao">
      <img src={imagem} alt="Frango com batatas fritas e salada verde." />
      <div className="descricao-card">
        <h1>{classificacao}</h1>
        <h2>{nome}</h2>
        <p className="descricao-do-prato">{descricao}</p>
        <div>
          <p className="preco">R$ {preco}</p>
          <div className="duracao-e-reviews">
            <div className="tempo-de-preparo">
              <img src={relogio} alt="Ícone de um relógio"/>
              <p>{tempo} min</p>
            </div>
            <div className="reviews">
              <img src={avatar} alt="Ícone de uma pessoa"/>
              <p>{reviews}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
