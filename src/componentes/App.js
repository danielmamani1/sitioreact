import { collection, getDocs, query, doc, deleteDoc, where, } from "firebase/firestore";
import React, {useEffect, useState} from 'react';
import Firebase, { db } from './componentes/firebase';
import AppForm from './componentes/AppForm';
import { useEffect, useState } from 'react';


function App() {
  const [idActual, setIdActual] = useState("");
  const [docsBD, setDocsBD] = useState([]);
  const [orden, setOrden] = useState(0);
  const i = 1;

  const fnRead = async () => {
  }

useEffect( () => {
}, [idActual])

const  fnDelete = async (xId) => {

}
return (
  <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
    <AppForm/>
  </div>
);
}
export default App;
