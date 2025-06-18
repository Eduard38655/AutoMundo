import Style from "../Styles/CompanyInfo.module.css"

function CompanyInfo(params) {
    return(
     <div className={Style.Company_Container}>
<div className={Style.SubCompany_Container}>
     <h2>¿Por Qué Elegir AutoMundo?</h2>
  
   <div className={Style.Div_Container}>

<div>
    <h3> Calidad Garantizada</h3>
    <p>Todos nuestros vehículos pasan por una rigurosa inspección para asegurar su óptimo estado.</p>     
 </div>


<div>
    <h3> Precios Competitivos</h3>
    <p>Ofrecemos las mejores ofertas del mercado sin comprometer la calidad</p>   
</div>



  <div>
    <h3>Atención Personalizada</h3>
    <p>Nuestro equipo de expertos está listo para ayudarte a encontrar el coche perfecto para ti.</p>   
 </div>

   </div>

</div>

     </div>)
}

export default CompanyInfo