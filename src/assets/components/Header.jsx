import{ Link } from 'react-router-dom'
import headerStyle from '../components/Header.module.css'

function Header (){
    return(
        <div className={headerStyle.header}>
            <div className={headerStyle.container}>
               <div className={headerStyle.nav}>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/QuemSomos'>Quem Somos</Link></li>
                        <li><Link to='/Instrumentos'>Instrumentos</Link></li>
                        <li><Link to='/Endereço'>Endereço</Link></li>
                        <li><Link to='/Contato'>Contato</Link></li>
                    </ul>
               </div>
            </div>
        </div>
    )
}

export default Header