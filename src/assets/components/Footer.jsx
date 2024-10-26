import StyleFooter from '../components/Footer.module.css'
import IconWtz from '../images/whats.jpg'
import IconFace from '../images/face.jpg'
import IconInsta from '../images/insta.jpg'

function Footer(){
    return(
        <div className={StyleFooter.container}>
            <div className={StyleFooter.fundo}>
                <div className={StyleFooter.conteudo}>
                    <div className={StyleFooter.texts}>
                        <p className={StyleFooter.span}>Nossa Loja - Instrumentos Musicais</p>
                        <p>Rua Tito, 54 - Lapa</p>
                        <p>São Paulo - Brasil</p>
                    </div>
                    <div className={StyleFooter.icon}>
                        <img src={IconWtz} alt="icone" className={StyleFooter.icons}/>
                        <img src={IconInsta} alt="icone" className={StyleFooter.icons}/>
                        <img src={IconFace} alt="icone" className={StyleFooter.icons}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer