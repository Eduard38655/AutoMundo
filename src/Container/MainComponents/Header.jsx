import { Link } from "react-router-dom"
import Styles from "../Styles/Header.module.css"
function Header(params) {
    return(
    <header className={Styles.HeaderContainer} >

   <div className={Styles.HeaderDiv}>
     <Link to={"/"} className={Styles.Link}><h1><span>Auto</span>Mundo</h1></ Link >

<div className={Styles.Div_Ul}>
    <ul>
        <Link to={"/"} className={Styles.Link}><li  >Inicio</li></ Link >
        <Link to={"/AutoMundo-Coches"} className={Styles.Link}><li>Coches</li></ Link >
        <Link to={"/AutoMundo-Nosotros"} className={Styles.Link}><li>Nosotros</li></ Link >
        <Link to={"/AutoMundo-Contacto"} className={Styles.Link}><li>Contacto</li></ Link >
    </ul>
</div>
    </div>
    
    </header>)
}

export default Header