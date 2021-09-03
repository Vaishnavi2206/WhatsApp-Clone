import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLZXuF-WxpkIl3P1UVemU0FtIisxAW8D8",
    authDomain: "whatsapp-b1090.firebaseapp.com",
    projectId: "whatsapp-b1090",
    storageBucket: "whatsapp-b1090.appspot.com",
    messagingSenderId: "845408668754",
    appId: "1:845408668754:web:6e70b197143c2c624ba38b",
    measurementId: "G-2CT7LFC4DL"
  };

    const firebasApp=firebase.initializeApp(firebaseConfig)
    const db=firebasApp.firestore()
    const auth=firebase.auth()
    const provider=new firebase.auth.GoogleAuthProvider()


    export {provider,auth};
    export default db;