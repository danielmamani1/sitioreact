import React, { useState } from 'react'
import { db } from './firebase';
import { addDoc, collection } from 'firebase/firestore';


const AppForm = () => {
 //////GUARDAR / ACTUALIZAR ////
 const campoRegistro = { nombre:"", edad:"", genero:""}
 const [objeto, setObjeto] = useState(campoRegistro);

    const handleSubmit = (e) => {    //manejador de submit
        e.preventDefault();

        try {
            if(db){
              addDoc(collection(db, 'persona'), objeto);
                console.log("Se guardo con exito");
            }
        } catch (error) {
            console.error();
            
        }
    
    }





    return (
        <div style={{background:"orange",padding:"10px",textAlign:"center"}}>
            <form onSubmit={handleSubmit}>
            <h1>AppForm.js</h1>
            <input type='text' placeholder='Nombre...' />
            <input type='text' placeholder='Nombre...' />
            <select>
                <option value="">Seleccione...</option>
                <option value="M"> Masculino </option>
                <option value="F"> Femenino </option>
            </select>
            <button>
                Guardar / Actualizar
            </button>
            </form>
        </div>
    )
}

export default AppForm