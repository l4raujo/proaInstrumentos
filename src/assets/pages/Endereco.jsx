import Styles from '../pages/Endereco.module.css'
import AreaText from '../components/AreaText'

function Endereco(){
    return(
        <div className={Styles.container}>
            <div className={Styles.opacity}>
                <div className={Styles.fundo}>
                    <AreaText 
                        bgFundo='bgMaps'
                    />
                </div>
            </div>
        </div>
    )
}

export default Endereco