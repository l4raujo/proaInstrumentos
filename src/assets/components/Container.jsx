import Styles from '../components/Container.module.css'

function Container({ opacityBg, fundoBg}){
    return(
        <div className={Styles.container}>
            <div className={Styles.opacity}>
                style={{ opacity: opacityBg}}

                <div className={Styles.fundo}>
                    style={{ backgroundColor: fundoBg}}
                </div>
            </div>
        </div>
    )
}

export default Container