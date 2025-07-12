import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import DataBase from "../../../BackedControled/DataBase.js";
import { MoreDetailsContext } from "../../ContextData/moreDetails.jsx";

function ButtonVerDetalles( ) {

const {VerProducto,SetVerProducto}=useContext(MoreDetailsContext)
const {ActivateVerD,SetActivateVerD}=useContext(MoreDetailsContext)
const {Data,SetData}=useContext(MoreDetailsContext)
const [Run,SetRun]=useState(false)
 
 const{ResetData,SetResetData}=useContext(MoreDetailsContext)

 
async function HandleData(params) {
   
       
               
               SetResetData(DataBase);
                SetActivateVerD(true)
              
              
               
} 
    
    return(<>

    <Link to={"/Ver-detalles"} ><button onClick={HandleData}>Ver detalles</button></Link>
    </>)
}

export default ButtonVerDetalles