import './styles/reset.css';
import './styles/App.css';
import Cabecalho from './components/Header';

function App() {
  
  return (
    <section>
      <Cabecalho logo="Rango!" itensMenu={["Home", "Receitas", "Reviews", "Sobre", "Fale Conosco", "Parceiros"]}/>

    </section>
    
  );
}

export default App;
