import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import{initializeApp} from "firebase/app";

const btn = document.getElementById("register-btn");
  
btn.addEventListener("click", register);

const firebaseConfig = {};

const app = initializeApp(firebaseConfig);

const register = () => {
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  
  const loginBtn = document.getElementById("login-btn");
  
  loginBtn.addEventListener("click", login);
  
  const login = () => {
    const email = document.getElementById("l-email");
    const password = document.getElementById("l-password");
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("user", user);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  
