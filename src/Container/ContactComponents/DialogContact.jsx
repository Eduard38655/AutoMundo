 import { useContext } from "react";
import Styles from "../../Container/ContactStyles/ContactDialog.module.css";
import { Dialog_Contexto } from "../../ContextData/Context.jsx";

function DialogContact() {

  const {ValidationJoi,SetJoinValidation}=useContext(Dialog_Contexto)
  const {OpenDialog,SetOpenDialog}=useContext(Dialog_Contexto)
  const {Errores,SetErrores}=useContext(Dialog_Contexto)

 

    return(<div className={Styles.DivDialog} >
     {OpenDialog ?(<>
    {ValidationJoi ?(
 
    
      <dialog open className={Styles.Dialog}>

<div className={Styles.SubComponents}>
  <i className="fa-solid fa-circle-check" style={{color:"green"}} ></i>
  <h2>Los Datos han sido enviados</h2>
</div>
    
<button onClick={(e)=>SetOpenDialog(false)}>Cancelar</button>
 
    </dialog> ) : ( 
<dialog open className={Styles.Dialog}>
  <i className="fa-solid fa-circle-exclamation" style={{color:"red"}}></i>
  <h2>There was an error</h2>

    <div className={Styles.SubComponents}>
   {Object.entries(Errores).map(([key, value], index) => (
   <ul key={index}><li>{value}</li></ul>))}
    </div>
<button onClick={(e)=>SetOpenDialog(false)}>Cancelar</button>

</dialog>
      
    )

}
     
     </>) : (<></>)}
   
    </div>)
}

export default DialogContact