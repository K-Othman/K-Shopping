import {
  signInWithEmailAndPassword,
  // GoogleAuthProvider,
  // signInWithPopup,
  // getAuth,
  signOut,
} from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import { auth } from "../firebase";
import GoogleButton from "react-google-button";
import { UserAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ProductsContext } from "../context/ProductsContext";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { googleSignIn, user, logOut } = UserAuth();
  const navigate = useNavigate();
  const { loading } = useContext(ProductsContext);

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
  if (loading) {
    return (
      <span className="loader absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] "></span>
    );
  }

  return (
    <div className="h-[100vh]">
      <div>
        <form
          onSubmit={signIn}
          className="w-[500px] mx-auto bg-[#EEE] mt-10 rounded-lg p-10"
        >
          <h1 className=" mb-6 text-lg text-center">Sign In With</h1>
          <GoogleButton
            className="mb-6  mx-auto"
            onClick={handleGoogleSignIn}
          />
          <div className="flex flex-col">
            <label className="mb-2"> Email</label>
            <input
              className="p-3 rounded-lg mb-4"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-2"> Password </label>

            <input
              className="p-3 rounded-lg mb-4"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            className="bg-[#4284F3] text-white w-[100%] py-2 rounded-lg"
            type="submit"
          >
            Log In
          </button>
          <p className="mt-4">
            You don't have account ?
            <Link
              to="/signup"
              className="ml-2 font-medium text-blue-600 dark:text-blue-500 underline"
            >
              Sign Up
            </Link>
          </p>
        </form>

        {/* <button type="button" onClick={logOut}>
          Sign out
        </button> */}
      </div>
    </div>
  );
}

export default SignIn;
// w-[500px] mx-auto bg-[#EEE] my-auto rounded-lg p-10
