import { initializeApp } from "firebase/app";
import firebaseConfig from './Firebase.config';

const Authentication = () => {
     initializeApp(firebaseConfig);
}
export default Authentication;