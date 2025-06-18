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
               const response = await fetch("http://localhost:3000/GetData", {
                 method: "GET",
                 headers: { "content-type": "application/json" },
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