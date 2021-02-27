import React,{useState,Fragment} from 'react';

const MiColeccion = () => {

    const [miArreglo,setmiArreglo]=useState([1,2,3,4,5]);
    return (  
        <Fragment>
            <div className ="container">
             <h1>Soy el componente numero 2 de la practica y contengo un  arreglo</h1>
             <h3>contenido del arreglo</h3>
             <p>
                 {
                     miArreglo.map(

                        (item) => <p> {item} </p>
                     )
                 }

             </p>
             </div>

        </Fragment>
    );
}
export default MiColeccion;