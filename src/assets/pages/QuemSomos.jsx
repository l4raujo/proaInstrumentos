import Styles from '../pages/QuemSomos.module.css'
import AreaText from '../components/AreaText'

function QuemSomos(){
    return(
       <div className={Styles.container}>
            <div className={Styles.opacity}>
                <div className={Styles.fundo}>
                    <AreaText 
                        titulo='Nossa Loja - Instrumentos Musicais'
                        texto='Lorem ipsum dolor sit amet consectetur 
                        adipisicing elit. Quibusdam sit iusto ipsa voluptates quo debitis sint voluptatum soluta provident culpa, nisi blanditiis. Tempore, 
                        ad ratione est maiores ipsam ab tempora.'
                    /> 
                </div>
            </div>
        </div>
    )
}

export default QuemSomos