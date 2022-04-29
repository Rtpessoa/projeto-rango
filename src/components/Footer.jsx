import '../styles/footer.css';
import carrot from '../assets/images/carrot.png'
const Footer = (props) => {
    return(
        <footer>
            <div className='subscribe-content'>
                <div className='subscribe-container'>
                    <h3 className='subscribe-title'>Receba mais receitas!</h3>
                    <input type="text" name="" className='subscribe-input' placeholder='e-mail'/>
                    <button className='subscribe-button' >Assinar</button>
                </div>
            </div>
            <div className='footer-content'>
                <img className='footer-carrot-icon' src={carrot} alt="" />
            </div>
        </footer>
    )
}

export default Footer