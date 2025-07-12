import { useEffect, useState } from "react"
import DataBase from "../../../BackedControled/DataBase.js"
import CarsContent from "../CarsComponents/CarsContent.jsx"
import SearchInput from "../CarsComponents/SearchCars.jsx"
import Footer from "../MainComponents/Footer.jsx"
import Header from "../MainComponents/Header.jsx"
import MobileHeader from "../MainComponents/MovilHeader.jsx"
function CarsMainPage(params) {

  const [data, setData] = useState([]);
  const [ResetData,SetResetData]=useState([])
 
  useEffect(() => {
    
    
        setData(DataBase);
        SetResetData(DataBase)
     
  }, []);

  

   
   return(<>
 <Header/>
 <MobileHeader />
 <SearchInput data={data} setData={setData} ResetData={ResetData} SetResetData={SetResetData}/>
 <CarsContent data={data} setData={setData} ResetData={ResetData} SetResetData={SetResetData}/>
 <Footer />
   </>)
}

 export default CarsMainPage