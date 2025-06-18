import { useState } from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/Header.module.css";

function MobileHeader(params) {
    const [ActiveMenu,SetMenu]=useState(false)
     
 
 
    return(<>
    <div className={Styles.Container_Mobile_Inactive} >
   
      <div className={Styles.DivMobile_Inactive} >
 
<Link to={"/"} className={Styles.Link}><h1><span>Auto</span>Mundo</h1></ Link >

 {ActiveMenu? ( 
<button onClick={(e)=>SetMenu(false)}><i className="fa-solid fa-x"></i></button>) : (
<button onClick={(e)=>SetMenu(true)}><i className="fa-solid fa-bars"></i> </button>
)}
 
      </div>

      {ActiveMenu ?(<>
      <div className={Styles.Div_Ul}>
    <ul>
        <Link to={"/"} className={Styles.Link}><li   onClick={valor}>Inicio</li></ Link >
        <Link to={"/AutoMundo-Coches"} className={Styles.Link}><li>Coches</li></ Link >
        <Link to={"/AutoMundo-Nosotros"} className={Styles.Link}><li>Nosotros</li></ Link >
        <Link to={"/AutoMundo-Contacto"} className={Styles.Link}><li>Contacto</li></ Link >
    </ul>
</div>
      
      </>) : (<></>)}
    </div>
     
     



 
 

    </>)
}

export default MobileHeader