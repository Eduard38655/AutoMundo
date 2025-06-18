 import Styles from "../ContactStyles/Content.module.css"
import GooleMapData from "../GoogleMap/Map.jsx"
import InputComponents from "./InputComponents.jsx"

function ContactContent(params) {
    return(<div className={Styles.DivContainer}  >
    
    <div className={Styles.DivSub_Container}>

<h2>Contáctanos</h2>
 
<p>¿Tienes preguntas o necesitas ayuda? Estamos aquí para asistirte. Completa el formulario a continuación o utiliza nuestros otros canales de contacto.</p>

<div className={Styles.ContentCars}>


<div className={Styles.ContainerDetails}>

<h3>Información de Contacto</h3>

<p><span>Dirección:</span> Calle Ficticia 123, Ciudad Auto, PA 45678</p>
<p><span>Teléfono:</span>1 (234) 567-890</p>
<p><span>Email:</span> info@automundo.com</p>
<br />
<h3>Horario de Atención:</h3>
<p>Lunes a Viernes: 9:00 AM - 6:00 PM</p>
<p>Sábado: 10:00 AM - 4:00 PM</p>
<p>Domingo: Cerrado</p>

</div>

<InputComponents/>

</div>
 
 
<GooleMapData/>
 
    </div>
    </div>)
}

export default ContactContent