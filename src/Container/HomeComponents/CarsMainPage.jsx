import { useEffect, useState } from "react"
import CarsContent from "../CarsComponents/CarsContent.jsx"
import SearchInput from "../CarsComponents/SearchCars.jsx"
import Footer from "../MainComponents/Footer.jsx"
import Header from "../MainComponents/Header.jsx"
import MobileHeader from "../MainComponents/MovilHeader.jsx"
function CarsMainPage(params) {

  const [data, setData] = useState([]);
  const [ResetData,SetResetData]=useState([])

  useEffect(() => {
    
    const DetData = async () => {
      try {
        const response = await fetch("http://localhost:3000/GetData",{
          method:"GET",headers: {
    'Authorization': 'Bearer mi-token-de-autorizacion',
    'Content-Type': 'application/json'
  }
        });
        const result = await response.json();
        setData(result.data || []);
        SetResetData(result.data || [])
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    DetData();
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