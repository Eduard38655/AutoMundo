import Footer from "../MainComponents/Footer.jsx"
import Header from "../MainComponents/Header.jsx"
import MobileHeader from "../MainComponents/MovilHeader.jsx"
import ContentNosotros from "../NosotrosComponerts/Content.jsx"
import Styles from "../NosotrosStyles/Content.module.css"


function MainNosotros(params) {
    
    return(<article className={Styles.MainContainer} >
    <Header />
     <MobileHeader />
    <ContentNosotros/>
    < Footer/>
    </article>)
}

export default MainNosotros