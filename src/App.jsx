import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dialog_Contexto from "../src/ContextData/Context.jsx";
import MoreDetailsContext from "../src/ContextData/moreDetails.jsx";
import LoadingLazy from "./Container/OthersComponents/LoadingLazy.jsx";

const CarsMainPage=lazy(()=>import('../src/Container/HomeComponents/CarsMainPage.jsx'))
const MainPage = lazy(() => import('../src/Container/HomeComponents/MainPage.jsx'));
const Nosotros=lazy(()=>import('../src/Container/HomeComponents/Nosotros.jsx'))
const Contact=lazy(()=>import('../src/Container/HomeComponents/ContactMainPage.jsx'))
const VerDetallesItems=lazy(()=>import("./Container/HomeComponents/ItemsView.jsx"))
const Error404=lazy(()=>import('./Container/OthersComponents/NotFound.jsx'))

function App() {
  return (
    <Suspense fallback={<LoadingLazy />}> 
    <Dialog_Contexto > 
    <MoreDetailsContext> 
     
    <BrowserRouter  basename="/AutoMundo-Responsive-App"  >
      <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/AutoMundo-Coches" element={<CarsMainPage />} />
      <Route path="/AutoMundo-Nosotros" element={<Nosotros />} />
      <Route path="/AutoMundo-Contacto" element={<Contact />} />
      <Route path="/Ver-detalles" element={<VerDetallesItems/>} />
      <Route path="*" element={<Error404/>} />

      </Routes>
    </BrowserRouter>
     
    </MoreDetailsContext>
    </Dialog_Contexto >
    </Suspense>
  );
} 

export default App;
