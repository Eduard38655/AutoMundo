// client/src/components/CarsMainPage.jsx
import { useEffect, useState } from 'react';
import CarsContent from '../CarsComponents/CarsContent.jsx';
import SearchInput from '../CarsComponents/SearchCars.jsx';
import Footer from '../MainComponents/Footer.jsx';
import Header from '../MainComponents/Header.jsx';
import MobileHeader from '../MainComponents/MovilHeader.jsx';

function CarsMainPage() {
  const [data, setData] = useState([]);
  const [resetData, setResetData] = useState([]);

  const API = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`${API}/GetData`, {
          headers: { 'Content-Type': 'application/json' }
        });
        if (!res.ok) throw new Error(`Status ${res.status}`);
        const json = await res.json();
        setData(json.data);
        setResetData(json.data);
      } catch (err) {
        console.error('Error fetching data:', err);
      }
    };

    fetchData();
  }, [API]);

  return (
    <>
      <Header />
      <MobileHeader />
      <SearchInput
        data={data}
        setData={setData}
        ResetData={resetData}
        SetResetData={setResetData}
      />
      <CarsContent
        data={data}
        setData={setData}
        ResetData={resetData}
        SetResetData={setResetData}
      />
      <Footer />
    </>
  );
}

export default CarsMainPage;
