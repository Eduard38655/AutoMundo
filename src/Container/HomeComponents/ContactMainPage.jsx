import ContactContent from "../ContactComponents/ContactContent.jsx"
import DialogContact from "../ContactComponents/DialogContact.jsx"
import Styles from "../ContactStyles/Content.module.css"
import Footer from "../MainComponents/Footer.jsx"
import Header from "../MainComponents/Header.jsx"
import MobileHeader from "../MainComponents/MovilHeader.jsx"

 function ContactMainPage(params) {
    
    return(<article  className={Styles.ArticleContainer} >
    <Header />
     <MobileHeader />
    <DialogContact />
    <ContactContent/>
    < Footer/>
    </article>)
}

export default ContactMainPage