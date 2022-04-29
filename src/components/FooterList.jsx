const FooterList = (props) => {
   
    return (
        <ul className='footer-text-list'>
            {props.itens.map((menuItem, index) => {
               if ( index == 0) {
                    return (
                        <li key={index} className='footer-text-list-title' >{menuItem}</li>
                    )
               } 
               else {
                return (
                    <li key={index}><a className="footer-link" href="#">{menuItem}</a></li>
                    )
               }
            })}

        </ul>
    );
};

export default FooterList;
