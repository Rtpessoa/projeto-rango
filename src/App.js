import Cabecalho from './components/Header';
import "./styles/reset.css";
import "./styles/App.css";
import ContainerCard from "./components/Container-card";


function App() {
  return (

    <section>
      <Cabecalho logo="Rango!" itensMenu={["Home", "Receitas", "Reviews", "Sobre", "Fale Conosco", "Parceiros"]}/>
      <ContainerCard />
    </section>
  );
}

export default App;
