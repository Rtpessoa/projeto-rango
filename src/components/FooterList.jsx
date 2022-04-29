const FooterList = (props) => {
   
    return (
        <ul className='footer-text-list'>
            {props.itens.map((menuItem, index) => {
               if ( index == 0) {
                    return (
                        <li className='footer-text-list-title' >{menuItem}</li>
                    )
               } 
               else {
                return (
                    <li>{menuItem}</li>
                    )
               }
            })}

        </ul>
    );
};

export default FooterList;
