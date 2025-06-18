import { Link } from "react-router-dom"
import Styles from "./Error404.module.css"

function Error404(params) {
    return(<div className={Styles.DivContainer}>
    <p><i className="fa-solid fa-triangle-exclamation fa-beat"></i>404! <span>NotFound</span></p>
    <Link className={Styles.Link} to={"/"}>Return to the main page</Link>
    
    </div>)
}

export default Error404