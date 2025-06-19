import { lazy, Suspense } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom"; // Cambio importante aquí
import Dialog_Contexto from "../src/ContextData/Context.jsx";
import MoreDetailsContext from "../src/ContextData/moreDetails.jsx";
import LoadingLazy from "./Container/OthersComponents/LoadingLazy.jsx";

const CarsMainPage = lazy(() => import('../src/Container/HomeComponents/CarsMainPage.jsx'));
const MainPage = lazy(() => import('../src/Container/HomeComponents/MainPage.jsx'));
const Nosotros = lazy(() => import('../src/Container/HomeComponents/Nosotros.jsx'));
const Contact = lazy(() => import('../src/Container/HomeComponents/ContactMainPage.jsx'));
const VerDetallesItems = lazy(() => import("./Container/HomeComponents/ItemsView.jsx"));
const Error404 = lazy(() => import('./Container/OthersComponents/NotFound.jsx'));

function App() {
  return (
    <Suspense fallback={<LoadingLazy />}> 
      <Dialog_Contexto> 
        <MoreDetailsContext> 
          {/* Cambiamos BrowserRouter por HashRouter */}
          <Router basename="/AutoMundo">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/AutoMundo-Coches" element={<CarsMainPage />} />
              <Route path="/AutoMundo-Nosotros" element={<Nosotros />} />
              <Route path="/AutoMundo-Contacto" element={<Contact />} />
              <Route path="/Ver-detalles" element={<VerDetallesItems/>} />
              <Route path="*" element={<Error404/>} />
            </Routes>
          </Router>
        </MoreDetailsContext>
      </Dialog_Contexto>
    </Suspense>
  );
} 

export default App;