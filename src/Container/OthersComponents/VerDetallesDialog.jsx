import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Styles from "../../Container/OthersComponents/VerDetallestyles.module.css";
import { MoreDetailsContext } from "../../ContextData/moreDetails.jsx";

function VerDetallesDialog(params) {

 const {ActivateVerD,SetActivateVerD}=useContext(MoreDetailsContext)
const{ Data,SetData}=useContext(MoreDetailsContext)
 const{ProductoID,SetProducto}=useContext(MoreDetailsContext)
 const{ResetData,SetResetData}=useContext(MoreDetailsContext)
 
 
  useEffect(()=>{    
const Filter=ResetData.filter((item)=>item.autoid==ProductoID)
SetData(Filter)
SetActivateVerD(false)
 
  },[ActivateVerD])
 
    

 
   return(<div  className={Styles.Details_All_Components}>  
 
    
 <div   className={Styles.Container}>
 

   {Data.map((item,index)=>(
  <div className={Styles.SubContainer} key={index}>

<img src={item.img} alt="" />
      <div className={Styles.Div_Sub_Container}>

<div className={Styles.Div_Title}>
<h2 key={index}>{item.tipoauto}</h2>
<p>{item.description}</p>
</div>
 
    
<div className={Styles.Div_Caracteristicas}>
  <h3>Caracteristicas Destacados</h3>
  <br />
  <p><span><i className="fa-solid fa-check"></i></span>{item.carac_interior}</p>
  <p><span><i className="fa-solid fa-check"></i></span>{item.carac_motor}</p>
  <p><span><i className="fa-solid fa-check"></i></span>{item.carac_sistemas}</p>
  <p><span><i className="fa-solid fa-check"></i></span>{item.carac_velocidad}</p>
</div>
<Link to={"/AutoMundo-Coches"}>      
      <button className={Styles.Ver_Info}>Explorar todos los coches</button>
</Link>
    </div>
  </div>
   ))}

   
 </div>

   
   </div>)
}

export default VerDetallesDialog