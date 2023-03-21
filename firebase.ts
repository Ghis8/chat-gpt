import {getApp,getApps,initializeApp} from 'firebase/app'
import {getFirestore} from 'firebase/firestore'




// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAJRDJPq00sHd-jYbgkLMD78nua3gf7zWU",
  authDomain: "chatgtp-clone-a204b.firebaseapp.com",
  projectId: "chatgtp-clone-a204b",
  storageBucket: "chatgtp-clone-a204b.appspot.com",
  messagingSenderId: "378646241683",
  appId: "1:378646241683:web:f0e9546ee380f2d362c866"
};

// Initialize Firebase
const app = getApps().length ? getApp():initializeApp(firebaseConfig)

const db=getFirestore(app)

export {db}