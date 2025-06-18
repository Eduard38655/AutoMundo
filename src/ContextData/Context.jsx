import { createContext, useState } from "react";

export const Dialog_Contexto = createContext();

const DialogProvider = ({ children }) => {
const [ValidationJoi,SetJoinValidation]=useState(null)
const [OpenDialog,SetOpenDialog]=useState(false)
const [Errores,SetErrores]=useState([])

  return (
    <Dialog_Contexto.Provider value={{ 
       ValidationJoi,SetJoinValidation,
        OpenDialog,SetOpenDialog,
        Errores,SetErrores
    }}>
      {children}
    </Dialog_Contexto.Provider>
  );
};

export default DialogProvider
