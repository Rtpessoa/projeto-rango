import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import imagem1 from '../assets/images/arroz.png'
import imagem2 from '../assets/images/pato-gotico-kkkkk.png'
import imagem3 from '../assets/images/caipirinha.png'
import imagem4 from '../assets/images/baiao.png'
import imagem5 from '../assets/images/feijoada.png'

const Comida = (props) => {
   
  return (
    <div className="carousel" >
    <Carousel  autoPlay={true} emulateTouch={true} interval={5000} infiniteLoop={true} showArrows={false} showStatus={false} stopOnHover={true} transitionTime={1000} showThumbs={false}>
        <div >
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
  );
};

export default Comida;
