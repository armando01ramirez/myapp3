
import React,{useState,Fragment} from 'react';

const Componente = () => {

    const [numero,setNumero]=useState(3);
    return (  
        <Fragment>
            <div className ="container">
             <h1>Soy el componente numero 1 de la practica</h1>
             <h3>
                 {
                     numero >= 10? "es mayor o igual  ha" : "es menor o igual ha"
                 }
             </h3>
             </div>

        </Fragment>
       

    );
}
 
export default Componente;