import homeStyles from '../pages/Home.module.css'
import Area from '../components/AreaText'

function Home(){
    return(
        <div className={homeStyles.container}>
            <div className={homeStyles.opacity}>
                <div className={homeStyles.fundo}>
                    <Area 
                        titulo="Nossa Loja - Instrumentos Musicais"
                        texto="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                A, error! Dignissimos placeat adipisci, perspiciatis illum quae ad exercitationem qui maiores dolor minima labore nesciunt 
                                repellendus a vero repellat omnis consequuntur."
                    />
                    <Area 
                        bgFundo="bgVioloes"
                    />
                    
                </div>
            </div>
        </div>
    )
}

export default Home