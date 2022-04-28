import "../styles/card.css";
import frango from "../assets/images/frango.png"
import avatar from "../assets/icons/avatar.png"
import relogio from "../assets/icons/relogio.png"


function Card() {
  return (
    <div className="card-refeicao">
      <img src={frango} alt="Frango com batatas fritas e salada verde." />
      <div className="descricao-card">
        <h1>REFEIÇÕES</h1>
        <h2>Frango com Fritas</h2>
        <p className="descricao-do-prato">Coxas de frango acompanhada com salada, fritas e molho.</p>
        <div>
          <p className="preco">R$ 45,00</p>
          <div className="duracao-e-reviews">
            <div className="tempo-de-preparo">
              <img src={relogio} alt="Ícone de um relógio"/>
              <p>40 min</p>
            </div>
            <div className="reviews">
              <img src={avatar} alt="Ícone de uma pessoa"/>
              <p>18.498</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
