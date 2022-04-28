import './styles/reset.css';
import './styles/app.css';
import Carousel from "./components/Carousel";
import './components/Header';
import Cabecalho from './components/Header';

function App() {
  
  return (
    <section>
      <Cabecalho logo="Rango!" itensMenu={["Home", "Receitas", "Reviews", "Sobre", "Fale Conosco", "Parceiros"]}/>
      <Carousel/>
    </section>
    
  );
}

export default App;
