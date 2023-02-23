import {
  signInWithEmailAndPassword,
  // GoogleAuthProvider,
  // signInWithPopup,
  // getAuth,
  signOut,
} from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

function SignIn() {
  const { googleSignIn } = UserAuth();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

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

  // const signInWithGoogle = async () => {
  //   try {
  //     const res = await signInWithPopup(auth, provider);
  //     const user = res.user;
  //     localStorage.setItem("email", JSON.stringify(user));
  //     console.log(user, "<");
  //   } catch (err) {
  //     console.error(err);
  //   }
  // signInWithPopup(auth, provider).then((result) => {
  //   console.log(result);
  //   // if (data.user.email) {
  //   //   localStorage.setItem("email", data.user.email);
  //   // }
  // });
  // };

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
        <GoogleButton onClick={handleGoogleSignIn} />
        {/* <button type="button" onClick={signInWithGoogle}>
          Sign in with Google
        </button> */}
        <button type="button" onClick={() => signOut(auth)}>
          Sign out
        </button>
      </div>
      <Link
        to="/signup"
        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
      >
        Sign Up
      </Link>
    </div>
  );
}

export default SignIn;
