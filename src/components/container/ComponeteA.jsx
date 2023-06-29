
import { useState } from 'react';
import { ContactoClass } from '../../models/Contacto.class';
import ComponenteB from '../pure/ComponenteB';
import '../../styles/ComponenteA.css'


const ComponeteA = () => {


    const [conectado, setConectado] = useState(true);

    const contactoConectado = ()=>{
        setConectado(true);
    };
    const ContactoDesconectado = ()=>{
        setConectado(false);
    };
    
    const contacto = new ContactoClass('juan', 'vasquez', 'email@example.com' , conectado)

    return (
        <div>
            <p>
                Nombre: {contacto.nombre}
            </p>
            <p>
                Apellido: {contacto.apellido}
            </p>
            <p>
                Email: {contacto.email}
            </p>
            <ComponenteB contacto={contacto}/>
            <button onClick={contactoConectado}>
                En linea
            </button>

            <button onClick={ContactoDesconectado}>
                No Disponible
            </button>

        </div>
    );
};



export default ComponeteA;
