import { useEffect, useState } from "react"
import Styles from "../CarsPageStyles/SearchContent.module.css"

function SearchInput({data, setData,ResetData,SetResetData}) {
  const [GetData,SetGetData]=useState(data)
  const [GetMarca,SetGetMarca]=useState("")

const [InputValue,SetVaue]=useState("")
 
 
  useEffect(() => {
  // 1. Si no hay filtros, mostrar todo
  if (InputValue === "" && GetMarca === "Todas las Marcas") {
    setData(ResetData);
    return;
  }

  // 2. Aplicar filtro condicional
  const filteredData = ResetData.filter((e) => {
    const tipoMatch = InputValue === "" || e.tipoauto.toUpperCase().startsWith(InputValue.toUpperCase());
    const marcaMatch = GetMarca === "Todas las Marcas" || e.marcas.toUpperCase().startsWith(GetMarca.toUpperCase());
    return tipoMatch && marcaMatch;
  });

  setData(filteredData);

  
}, [GetMarca, InputValue]);

 
 
    return(<div className={Styles.DivContainer}>
        
  <div className={Styles.Div_Details}>
    <h2>Nuestra Colección de Coches</h2>
    <p>Explora la variedad de modelos que tenemos para ti.</p>
  </div>

<div className={Styles.Details_Input}>
    <input type="text" placeholder="Buscar por nombre o marca..." onChange={(e)=>SetVaue(e.target.value)} />
    <select name="" id=""  onChange={(e)=>SetGetMarca(e.target.value)}><option value="Todas las Marcas">Todas las Marcas</option>
   
    { ResetData.map((item,index)=>(
      <option key={item.autoid} value={item.marcas}>{item.marcas}</option>
    )) }
    
    </select>
</div>


    </div>)
}
 

export default SearchInput