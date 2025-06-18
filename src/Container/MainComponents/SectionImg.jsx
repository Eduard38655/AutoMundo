import { Link } from "react-router-dom"
import Styles from "../Styles/SectionImg.module.css"
function SectionImg(params) {
    
    return(
     <div className={Styles.Div_Container}>
   
     <div className={Styles.ContainerIMG}></div>

<div className={Styles.DivText}>
    <h2>Encuentra el Coche de Tus Sueños</h2>
    <p>Explora nuestra exclusiva colección de vehículos nuevos y seminuevos. Calidad, rendimiento y estilo en un solo lugar.</p>
<button> <Link to={"/AutoMundo-Coches"} className={Styles.Link}>Ver Coches Ahora</Link> </button>
</div>
 
     </div>)
}

export default SectionImg 