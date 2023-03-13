import {
  signInWithEmailAndPassword,
  // GoogleAuthProvider,
  // signInWithPopup,
  // getAuth,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleSignIn, user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (user != null) {
      navigate("/store");
    }
  }, [user]);

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
    <div className=" absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      <div>
        {/* <button type="button" onClick={signInWithGoogle}>
          Sign in with Google
        </button> */}
        {/* <p className="">OR sign in with your email</p> */}
        <form onSubmit={signIn}>
          <h1>Log In To Your Account </h1>
          <div>
            <label> Email: </label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label> Password: </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <p>OR</p>
        <GoogleButton onClick={handleGoogleSignIn} />
        <button type="button" onClick={logOut}>
          Sign out
        </button>
      </div>
      <p>
        You don't have account ?
        <Link
          to="/signup"
          className="ml-2 font-medium text-blue-600 dark:text-blue-500 underline"
        >
          Sign Up
        </Link>
      </p>
    </div>
  );
}

export default SignIn;
