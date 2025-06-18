import VerDetallesDialog from "../../Container/OthersComponents/VerDetallesDialog.jsx";
import Styles from "../../Container/OthersComponents/VerDetallestyles.module.css";
import Footer from "../MainComponents/Footer.jsx";
import MobileHeader from "../MainComponents/MovilHeader.jsx";

import Header from "../MainComponents/Header.jsx";
function ItemsView(params) {
 

 
return(<div  className={Styles.All_Components}>  
<Header/>
<MobileHeader />
<VerDetallesDialog/>
<Footer/>
   </div>)
}

export default ItemsView