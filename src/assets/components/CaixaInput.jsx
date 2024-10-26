import Styles from '../components/CaixaInput.module.css'

function CaixaInput({Texto}){
    return(
        <div className={Styles.container}>
             <p>{Texto}</p>
             <input type="text" placeholder="Digite aqui" className={Styles.caixaTexto}/>
        </div>
    )
}

export default CaixaInput