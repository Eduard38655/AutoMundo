import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MoreDetailsContext } from "../../ContextData/moreDetails.jsx";
function ButtonVerDetalles( ) {

const {VerProducto,SetVerProducto}=useContext(MoreDetailsContext)
const {ActivateVerD,SetActivateVerD}=useContext(MoreDetailsContext)
const {Data,SetData}=useContext(MoreDetailsContext)
const [Run,SetRun]=useState(false)
 
 const{ResetData,SetResetData}=useContext(MoreDetailsContext)

 
async function HandleData(params) {
   
      try {
               const response = await fetch("https://automundo.onrender.com/GetData",{
          method:"GET",headers: {
    'Authorization': 'Bearer mi-token-de-autorizacion',
    'Content-Type': 'application/json'
  }
        });
               const result = await response.json();
               SetData(result.data || []);
               
               SetResetData(result.data  );
                SetActivateVerD(true)
              } catch (err) {
                console.error("Error fetching data:", err);
              } 
              
               
} 
    
    return(<>

    <Link to={"/Ver-detalles"} ><button onClick={HandleData}>Ver detalles</button></Link>
    </>)
}

export default ButtonVerDetalles