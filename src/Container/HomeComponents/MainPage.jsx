 import CompanyInfo from "../MainComponents/CompanyInfo.jsx"
import Footer from "../MainComponents/Footer.jsx"
import Header from "../MainComponents/Header.jsx"
import HomeContent from "../MainComponents/HomeContent.jsx"
import MobileHeader from "../MainComponents/MovilHeader.jsx"
import SectionImg from "../MainComponents/SectionImg.jsx"
import Styles from "../Styles/MainPage.module.css"


function MainPage(params) {
    return(<article className={Styles.AllComponets}>
    <Header/>
    <MobileHeader />
    <SectionImg/>
    <HomeContent/>
    <CompanyInfo/>
    <Footer/>
    </article>)
}
 
export default MainPage