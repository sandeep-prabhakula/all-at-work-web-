import firebase from "firebase/compat/app"
import "firebase/compat/firestore"
import "firebase/compat/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAB-Gk4QxzakARjcddlzD6G4k_CcBP07CQ",
    authDomain: "smartindiahackathon2022.firebaseapp.com",
    projectId: "smartindiahackathon2022",
    storageBucket: "smartindiahackathon2022.appspot.com",
    messagingSenderId: "484999915956",
    appId: "1:484999915956:web:133152c0de6f3012f7eae1",
    measurementId: "G-4DPQMSKXVT"
  };

  firebase.initializeApp(firebaseConfig)
  export default firebase