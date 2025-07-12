import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DataBase from "../../../BackedControled/DataBase.js";
import { MoreDetailsContext } from "../../ContextData/moreDetails.jsx";
import ButtonVerDetalles from "../MainComponents/ButtonVerDetalles.jsx";
import Styles from "../Styles/HomeContent.module.css";

function HomeContent() {
  const [data, setData] = useState([]);
 const{ ProductoID,SetProducto}=useContext(MoreDetailsContext)
 
  useEffect(() => {
    
        setData(DataBase);
      
  
  }, []);

  const featuredCars = data.slice(0, 3);  

  return (
    <div className={Styles.HomeContainer}>
      <h2>Coches Destacados</h2>
      <div className={Styles.Container}>

        {featuredCars.length > 0 ? (
          featuredCars.map((auto,index) => (

            <div key={auto.autoid} className={Styles.ContainerDetails} onClick={(e)=>SetProducto(auto.autoid)}>

             <div className={Styles.DivImg}>
               <img src={auto.img} alt="" />
             </div>
              
              <div className={Styles.Div_Details_Info}>
                <div className={Styles.Item_Details_Info}>
                  <h2>{auto.tipoauto}</h2>
                  <span>
                    {auto.marcas} - {auto.yearmarca}
                  </span>
                  <h3>${auto.precio}</h3>
                  <p>{auto.description}</p>
                </div>

                <div className={Styles.Caract_Detail}>
                  <h3>Características:</h3>
                  <ul>
                    <li>{auto.carac_interior}</li>
                    <li>{auto.carac_motor}</li>
                    <li>{auto.carac_sistemas}</li>
                    <li>{auto.carac_velocidad}</li>
                  </ul>
                </div>
<ButtonVerDetalles/>

              </div>
             </div>
          ))
        ) : (<><p>Cargando autos...</p></>        
          
        )}
      </div><Link to={"/AutoMundo-Coches"}>      
      <button className={Styles.VerDetalles}>Explorar todos los coches</button>
      </Link> </div>
  );
}

export default HomeContent;
