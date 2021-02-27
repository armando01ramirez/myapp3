import React,{useState,Fragment} from 'react';


const MiFormulario = () => {

    const [persona,setPersona]=useState({

        nombre:'',
        apellido:''
    });
    const funcionCambio=(event) => {
        console.log('cambio y modificaciones')
        setPersona(
            {
                ...persona,[event.target.name]:event.target.value
            }

        )
    }
    const[dato,setDato]=useState("");
    const envioBoton=(event)=>{
        event.preventDefault();
        setDato(persona.nombre+''+persona.apellido)

    }
    return (

     
   
        <Fragment>
            <div className ="container">

            <h1>Soy un folrmulario</h1>
            
            <form className="row" onSubmit={envioBoton}>
                <div class ="col-md-3">
                    <input
                    placeholder="ingrese su nombre"
                    classNmae= "form-control"
                    type="text"
                    name="nombre"
                    onChange={funcionCambio}
                    />
                </div>
            </form>

            <form className="row">
                <div class ="col-md-3">
                    <input
                    placeholder="ingrese su apellido"
                    classNmae= "form-control"
                    type="text"
                    name="nombre"
                    onChange={funcionCambio}
                    />
                </div>
                <div className="col-md-3">
                <button className ="btn btn-primary" type ="submit">

                    Enviar datos
                </button>
            </div>
            </form>
            <h4>{persona.nombre}{persona.apellido}</h4>

            
            </div>




        </Fragment>




      );
}
 
export default MiFormulario;
