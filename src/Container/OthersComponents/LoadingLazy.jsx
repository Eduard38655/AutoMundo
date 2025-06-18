import Styles from "../OthersComponents/LoadingLazy.module.css"

function LoadingLazy(params) {
    return(
    <div className={Styles.DivContainer} >

    <div>
        <p><i className="fa-solid fa-spinner fa-spin-pulse"></i> Loading</p>
    </div>
    </div>
    )
}

export default LoadingLazy