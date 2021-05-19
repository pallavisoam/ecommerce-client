import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCxia9VG1pdKleDwnrsXmv7mtF-W2RLtzk",
  authDomain: "ecommerce-3deb8.firebaseapp.com",
  projectId: "ecommerce-3deb8",
  storageBucket: "ecommerce-3deb8.appspot.com",
  messagingSenderId: "271709945907",
  appId: "1:271709945907:web:43ff3f9cce6ddc8210e346",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// export
// export default firebase;
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

//   REACT_APP_REGISTER_REDIRECT_URL = 'https://mern-ecomm-react.herokuapp.com/register/complete'
// REACT_APP_FORGOT_PASSWORD_REDIRECT = "https://mern-ecomm-api.herokuapp.com/api/login"
// REACT_APP_API = 'https://mern-ecomm-api.herokuapp.com/api'
