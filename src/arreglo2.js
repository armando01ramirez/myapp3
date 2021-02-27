import React,{useState,Fragment} from 'react';

const MiColeccion2 = () => {

    const [miArreglo2,setmiArreglo2]=useState([1,2]);
    const [numero,setnumero] = useState(1);
    const agregar= () =>{
        setnumero (numero+1)
        setmiArreglo2([miArreglo2,numero])

    }
    return (  
        <Fragment>
            <div className ="container">
             <h1>Soy el componente numero 3 de la practica y contengo un  arreglo</h1>
             <h3>contenido del arreglo</h3>
             <button onClick={agregar}>Agregar numero</button>
             <p>
                 {
                     miArreglo2.map(

                        (item) => <p> {item} </p>
                     )
                 }

             </p>
             </div>

        </Fragment>
    );
}
export default MiColeccion2;