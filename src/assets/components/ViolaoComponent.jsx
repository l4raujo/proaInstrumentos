import Img from '../images/violao.jpg'
import Styles from '../components/ViolaoComponent.module.css'

function ViolaoComponent({desc, preco}){
    return(
        <div className={Styles.container}>
            <img src={Img} alt="produto" className={Styles.img}/>
            <p>{desc}</p>
            <span>{preco}</span>
        </div>
    )
}

export default ViolaoComponent