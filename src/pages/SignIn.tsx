import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth, provider } from "../firebase";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e: any) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, provider);
      const user = res.user;
      console.log(user);
    } catch (err) {
      console.error(err);
    }
    // signInWithPopup(auth, provider).then((result) => {
    //   console.log(result);
    //   // if (data.user.email) {
    //   //   localStorage.setItem("email", data.user.email);
    //   // }
    // });
  };

  return (
    <div className="sign-in-container">
      <form onSubmit={signIn}>
        <h1>Log In To Your Account </h1>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Log In</button>
      </form>
      <div>
        <button type="button" onClick={signInWithGoogle}>
          Sign in with Google
        </button>
        <button type="button" onClick={() => signOut(auth)}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export default SignIn;
