import { createContext, useState } from "react";
import DataBase from "../../BackedControled/DataBase.js";

export const MoreDetailsContext=createContext();
function MoreDetailsProvider({children}) {

    const [VerProducto,SetVerProducto]=useState([])
    const [ActivateVerD,SetActivateVerD]=useState(false)
    const [Data,SetData]=useState([]);
    const [ProductoID,SetProducto]=useState("")
    const [ResetData,SetResetData]=useState(DataBase);

    return(

<MoreDetailsContext.Provider value={{
    ActivateVerD,SetActivateVerD,VerProducto,SetVerProducto,Data,SetData,ProductoID,SetProducto,
    ResetData,SetResetData
    }}>
{children}
</MoreDetailsContext.Provider>

    )
}

export default MoreDetailsProvider