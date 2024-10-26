import Styles from '../pages/Contato.module.css'
import CaixaInput from '../components/CaixaInput'
import IconWtz from '../images/whats.jpg'
import IconFace from '../images/face.jpg'
import IconInsta from '../images/insta.jpg'

function Contato(){
    return(
        <div className={Styles.container}>
            <div className={Styles.opacity}>
                <div className={Styles.fundo}>
                    <div className={Styles.left}>
                        <CaixaInput 
                            Texto='Digite o seu nome'
                        />
                        <CaixaInput 
                            Texto='Entre com o seu e-mail'
                        />

                        <textarea name="espaço" placeholder='Digite aqui'></textarea>

                        <button>Enviar</button>
                    </div>
                    <div className={Styles.right}>
                        <p>Acesse também nossas redes sociais:</p>
                        <div className={Styles.icons}>
                            <img src={IconWtz} alt="wtz-icon" className={Styles.icon}/>
                            <img src={IconInsta} alt="insta-icon" className={Styles.icon}/>
                            <img src={IconFace} alt="face-icon" className={Styles.icon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contato