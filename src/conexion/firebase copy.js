/* Importa las bibliotecas de Firebase
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Define una variable para almacenar el código de configuración de Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDpy60znsNCzghwo9YPX1Ml0yvKb-pmijU",
  authDomain: "my-app1-7f692.firebaseapp.com",
  projectId: "my-app1-7f692",
  storageBucket: "my-app1-7f692.appspot.com",
  messagingSenderId: "202762065917",
  appId: "1:202762065917:web:2138dc8b6fb829b95a6b94",
  measurementId: "G-2NE18PKXDJ"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);

// Define un método de callback para manejar los errores
const onError = (error) => {
  console.log("Error al inicializar Firebase:", error);
};

// Inicializa Firebase con un método de callback
initializeApp(firebaseConfig, onError);

// Obtén los servicios de Firebase
const analytics = getAnalytics(app);
const auth = getAuth(app);
export const db = getFirestore(app);
export const firestore = getFirestore(app);
export const storage = getStorage(app);
*/