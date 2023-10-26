import AppForm from './componentes/AppForm';
import logo from './logo.svg';
//import './App.css';
import C01componente from './pagina/C01componente';
import {db} from './componentes/firebase';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, query } from 'firebase/firestore';

function App() {

  /// READ - LECTURA - fnRead //////////
  const [docBD, setDocBD] = useState("");
  const fnRead = () => {
    try {
      const xColeccionConQuery = query(collection(db, "persona"));
      const unsuscribe = onSnapshot(xColeccionConQuery, (xDatosBD) => {
        const xDoc = [];
        xDatosBD.forEach((doc) => {
          xDoc.push({id: doc.id, ...doc.data()});
        });
        setDocBD(xDoc);
      });

    } catch (error) {
      console.error(error);
    }
  }
  

  fnRead();
  //useEffect( () => {
    //fnRead();
  //}, []);

  /// DELETE - Eliminar - fnDelete ///////
  const [idActual, setIdeActual] = useState("");
  const fnDelete = (xId) => {

  }


  return (
    <div style={{width:"350px", background:"greenyellow",padding:"10px"}}>
     <AppForm {...{idActual, setIdeActual, fnRead}} />
     {
      docBD.map((p) =>
       <p key={p.id}>
        No. 1{p.nombre} ...
        <span onClick={() => fnDelete(p.id)}> x </span>
        .....
        <span onClick={() => setIdeActual(p.id)}> A </span>
       </p>  
      )
     }
     
     <p>No 1 Juan Manuel  x  A</p>
     <p>No 1 Rosa Maria  x  A</p>
     
     
    </div>
  );
}

export default App;
