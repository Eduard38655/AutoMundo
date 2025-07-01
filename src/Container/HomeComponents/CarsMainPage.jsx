 import { useEffect, useState } from "react";
import CarsContent from "../CarsComponents/CarsContent.jsx";
import SearchInput from "../CarsComponents/SearchCars.jsx";
import Footer from "../MainComponents/Footer.jsx";
import Header from "../MainComponents/Header.jsx";
import MobileHeader from "../MainComponents/MovilHeader.jsx";

 function CarsMainPage() {
  const [data, setData] = useState([]);
  const [resetData, setResetData] = useState([]);

  // Vite expone las variables que comienzan por VITE_
  const API_BASE = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE}/GetData`, {
          method: "GET",
          headers: {
            Authorization: "Bearer mi-token-de-autorizacion",
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}`);
        }
        const result = await response.json();
        setData(result.data || []);
        setResetData(result.data || []);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [API_BASE]);

  return (
    <>
      <Header />
      <MobileHeader />
      <SearchInput
        data={data}
        setData={setData}
        resetData={resetData}
        setResetData={setResetData}
      />
      <CarsContent
        data={data}
        setData={setData}
        resetData={resetData}
        setResetData={setResetData}
      />
      <Footer />
    </>
  );
}

 export default CarsMainPage