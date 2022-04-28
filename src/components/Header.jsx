import React, {useRef} from "react";
import iconeFecha from '../assets/images/Close.png'
import iconeMenu from '../assets/images/menu.png'
import '../styles/header.css';


const Cabecalho = (props) => {

  const ul = useRef()
  function closeHandle(e) {
    ul.current.classList.remove('show')
  }

  function openHandle(e) {
    ul.current.classList.toggle('show')
  }

  return (
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
  );
};

export default Cabecalho;

