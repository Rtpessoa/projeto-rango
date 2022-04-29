import React, {useRef} from "react"
import iconeFecha from '../assets/images/Close.png'
import iconeMenu from '../assets/images/menu.png'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import '../styles/header.css'
import imagem1 from '../assets/images/arroz.png'
import imagem2 from '../assets/images/pato-gotico-kkkkk.png'
import imagem3 from '../assets/images/caipirinha.png'
import imagem4 from '../assets/images/baiao.png'
import imagem5 from '../assets/images/feijoada.png'


const Cabecalho = (props) => {

  const ul = useRef()
  const carousel = useRef()

  function closeHandle(e) {
    carousel.current.classList.remove('carousel-index-negativo')
    ul.current.classList.remove('show')
  }

  

  function openHandle(e) {
    carousel.current.classList.toggle('carousel-index-negativo')
    ul.current.classList.toggle('show')
  }

  return (
    <div>
      <header id="header" >
        <div className="container">
          <h1 className="logo logo-font">{props.logo}</h1>
          <nav>
              <ul ref={ul} className="header-navigation">
                  {props.itensMenu.map(function(menu, index){
                      return <li onClick={closeHandle} key={index} className="nav-list-item"> <a className="header-navigation-item" href="#menu"> {menu} </a> </li>
                    })}
                <li className="close-item">
                  <img
                    className="close-icon pointer"
                    src={iconeFecha}
                    alt="ícone de fechar menu"
                    onClick={closeHandle}
                  />
                </li>
              </ul>
          </nav>
          <img
            className="menu-icon pointer"
            src={iconeMenu}
            alt="ícone de menu"
            onClick={openHandle}
          />
        </div>
      </header>
      <div className="carousel" ref={carousel}>
    <Carousel  autoPlay={true} emulateTouch={true} interval={5000} infiniteLoop={true} showArrows={false} showStatus={false} stopOnHover={true} transitionTime={1000} showThumbs={false}>
        <div>
            <img src={imagem1} />
        </div>
        <div>
            <img  src={imagem2} />
        </div>
        <div>
            <img  src={imagem3} />
        </div>
        <div>
            <img src={imagem4} />

        </div>
        <div>
            <img  src={imagem5} />
        </div>
    </Carousel>
</div>

    </div>
  );

};


export default Cabecalho;

