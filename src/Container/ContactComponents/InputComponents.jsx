import { useContext, useState } from "react";
import { Dialog_Contexto } from "../../../src/ContextData/Context.jsx";
import Styles from "../ContactStyles/InputsStyles.module.css";

function InputComponents(params) {

const {ValidationJoi,SetJoinValidation}=useContext(Dialog_Contexto)
const {OpenDialog,SetOpenDialog}=useContext(Dialog_Contexto)
const {Errores,SetErrores}=useContext(Dialog_Contexto)

const [Email,SetEmail]=useState("")
const [FullName,SetName]=useState("")
const [Asunto,SetAsunto]=useState("")
const [Mensaje,SetMensaje]=useState("")

 
async function HandleSubmit(params) {
   

 
const response=await fetch("https://automundo.onrender.com/Submit/Message",{
    method:"POST",
    headers:{"content-type":"application/json" },
    body:JSON.stringify({Email,FullName,Asunto,Mensaje})
})
const data=await response.json()
 console.log(data,"valores v");
 
SetOpenDialog(true)
SetJoinValidation(data.dataValor)
 SetErrores(data.UserValidation)

}


    return(<div  className={Styles.DivInputs}>
 
    <label htmlFor="">Nombre Completo</label>
    <input type="text"  onChange={(e)=>SetName(e.target.value)} required/>

    <br />
    <label htmlFor="">Correo Electrónico</label>
    <input type="text"   onChange={(e)=>SetEmail(e.target.value)} required />

    <br />
    <label htmlFor="">Asunto</label>
    <input type="text"   onChange={(e)=>SetAsunto(e.target.value)} required/>

    <br />
    <label htmlFor="">Mensaje</label>
    <textarea name="" id=""  onChange={(e)=>SetMensaje(e.target.value)} required></textarea>

    <br />
    <button onClick={HandleSubmit} type="submit">Enviar Mensaje</button>

    

     
    </div>)
}

export default InputComponents