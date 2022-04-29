import "./styles/reset.css";
import "./styles/App.css";
import Cabecalho from './components/Header';
import ContainerCard from "./components/Container-card";
import Footer from "./components/Footer"


function App() {
  return (
    <section>
      <Cabecalho logo="Rango!" itensMenu={["Home", "Receitas", "Reviews", "Sobre"]}/>
      <ContainerCard />
      <Footer/>
    </section>
  );
}

export default App;
