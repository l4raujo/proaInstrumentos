import StyleArea from '../components/Area.module.css'

function AreaText({titulo, texto, bgFundo}){
    return(
        <div className={`${StyleArea.container} ${bgFundo ? StyleArea[bgFundo] : ''}`}>
            <h2>{titulo}</h2>
            <p>{texto}</p>
        </div>
    )
}

export default AreaText 