import Styles from '../pages/Instrumentos.module.css'
import ViolaoComponent from '../components/ViolaoComponent'

function Instrumentos(){
    return(
        <div className={Styles.container}>
            <div className={Styles.opacity}>
                <ViolaoComponent
                    desc='VIOLAO YAMAHA C40 II CLASSICO NYLON ACUSTICO NATURAL BRILHANTE'
                    preco='R$ 900,00'
                />
                <ViolaoComponent
                    desc='VIOLAO YAMAHA C50 II CLASSICO NYLON ACUSTICO NATURAL BRILHANTE'
                    preco='R$ 450,00'
                />
                <ViolaoComponent
                    desc='VIOLAO YAMAHA C60 II CLASSICO NYLON ACUSTICO NATURAL BRILHANTE'
                    preco='R$ 1200,00'
                />
                <ViolaoComponent
                    desc='VIOLAO YAMAHA C70 II CLASSICO NYLON ACUSTICO NATURAL BRILHANTE'
                    preco='R$ 1000,00'
                />
            </div>
        </div>
    )
}

export default Instrumentos