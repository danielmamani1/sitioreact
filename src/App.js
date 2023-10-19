import { collection, getDocs, query, doc, deleteDoc, where, } from "firebase/firestore";
import React, {useEffect, useState} from 'react';
import Firebase, { db } from './componentes/firebase';
import AppForm from './componentes/AppForm';
import { useEffect, useState } from 'react';


function App() {

return (
  <div style={{width:"350px", background:"greenyellow", padding:"10px"}}>
    <AppForm/>
  </div>
);
}
export default App;
