import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MoreDetailsContext } from "../../ContextData/moreDetails.jsx";
import ButtonVerDetalles from "../MainComponents/ButtonVerDetalles.jsx";
import Styles from "../Styles/HomeContent.module.css";

function HomeContent() {
  const [data, setData] = useState([]);
 const{ ProductoID,SetProducto}=useContext(MoreDetailsContext)

  useEffect(() => {
    const DetData = async () => {
      try {
        const response = await fetch("http://localhost:3000/GetData", {
          method: "GET",
          headers: { "content-type": "application/json" },
          credentials:"include"
        });
        const result = await response.json();
        setData(result.data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    DetData();
  }, []);

  const featuredCars = data.slice(0, 3); // mostrar solo 3

  return (
    <div className={Styles.HomeContainer}>
      <h2>Coches Destacados</h2>
      <div className={Styles.Container}>

        {featuredCars.length > 0 ? (
          featuredCars.map((auto,index) => (
            
            <div key={auto.AutoID} className={Styles.ContainerDetails} onClick={(e)=>SetProducto(auto.AutoID)}>

              <img src={auto.IMG} alt="" />
              
              <div className={Styles.Div_Details_Info}>
                <div className={Styles.Item_Details_Info}>
                  <h2>{auto.TipoAuto}</h2>
                  <span>
                    {auto.Marcas} - {auto.YearMarca}
                  </span>
                  <h3>${auto.Precio}</h3>
                  <p>{auto.Description}</p>
                </div>

                <div className={Styles.Caract_Detail}>
                  <h3>Características:</h3>
                  <ul>
                    <li>{auto.Carac_Interior}</li>
                    <li>{auto.Carac_Motor}</li>
                    <li>{auto.Carac_Sistemas}</li>
                    <li>{auto.Carac_Velocidad}</li>
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
