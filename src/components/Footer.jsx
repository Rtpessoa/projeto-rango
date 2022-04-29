import "../styles/footer.css";
import iconeFacebook from "../assets/images/facebook.png";
import iconeYoutube from "../assets/images/youtube.png";
import iconeTwitter from "../assets/images/twitter.png";
import iconeInstagram from "../assets/images/instagram.png";
import FooterList from "../components/FooterList";

import carrot from "../assets/images/carrot.png";
const Footer = (props) => {
  return (
    <footer>
      <div className="subscribe-content">
        <div className="subscribe-container">
          <h3 className="subscribe-title">Receba mais receitas!</h3>
          <input
            type="text"
            name=""
            className="subscribe-input"
            placeholder="e-mail"
          />
          <button className="subscribe-button">Assinar</button>
        </div>
      </div>
      <div className="carrot-box">
        <img className="footer-carrot-icon" src={carrot} alt="" />
      </div>
      <div className="footer-content">
          <FooterList itens={["Categorias", "Refeições", "Sobremesas", "Petiscos", "Rápidas", "Regionais" ]} />
          <FooterList itens={["O Rango!", "Parceiros", "Sobre", "Fale Conosco", "Iniciativas", ]} />
          <FooterList itens={[ "Já acabou, Rango?", "Trabalhe Conosco", "Dúvidas Frequentes", "Termos de Uso", ]} />
          <ul className="footer-image-list">
            <li className="footer-text-list-title">Siga nas Redes!</li>
            <li className="footer-image-li">
              <img src={iconeYoutube} alt="Icone do Youtube" />
              <img src={iconeInstagram} alt="Ícone do Instagram" />
              <img src={iconeTwitter} alt="Ícone do Twitter" />
              <img src={iconeFacebook} alt="Ícone do Facebook" />
            </li>
          </ul>
      </div>
      <div className="footer-location">
        <p>
          ©Rango! S.A. - CNPJ: 00.000.000/0000-00. Todos os direitos reservados
          Av. Juscelino Kubitscheck, 300 - Centro, Joinville - SC, 89201-100.
        </p>
      </div>
      <div className="footer-close">
        <p>Rango!</p>
      </div>
    </footer>
  );
};

export default Footer;
