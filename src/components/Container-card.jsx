import Card from "./Card";
import "../styles/container-card.css";
import frango from "../assets/images/frango.png";
import porco from "../assets/images/porco-ao-molho.png";
import salada from "../assets/images/salada.png";
import bolo from "../assets/images/bolo-de-rolo.png";

function ContainerCard() {
  return (
    <>
    <h1 className="titulo-receitas">Receitas</h1>
      <div className="container-card">
        <Card
          imagem={frango}
          classificacao={"Refeições"}
          nome={"Frango com Fritas"}
          descricao={"Coxas de frango acompanhada com salada, fritas e molho. "}
          preco={"45,00"}
          tempo={"40"}
          reviews={"18.498"}
        />
        <Card
          imagem={porco}
          classificacao={"Carnes"}
          nome={"Porco ao Molho Barbecue"}
          descricao={
            "Costela suína temperada com especiarias e molho barbecue. "
          }
          preco={"80,00"}
          tempo={"60"}
          reviews={"20.125"}
        />
        <Card
          imagem={salada}
          classificacao={"Saladas"}
          nome={"Salada Tropical"}
          descricao={
            "Salada tropical a base de folhas verdes, frutas e frutos do mar."
          }
          preco={"25,00"}
          tempo={"15"}
          reviews={"1.138"}
        />
        <Card
          imagem={bolo}
          classificacao={"Sobremesas"}
          nome={"Bolo de Rolo"}
          descricao={"Bolo de rolo pernambucano recheado com alpino e canela."}
          preco={"60,00"}
          tempo={"80"}
          reviews={"12.139"}
        />
      </div>
    </>
  );
}

export default ContainerCard;
