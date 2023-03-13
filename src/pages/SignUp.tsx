import { createUserWithEmailAndPassword } from "firebase/auth";
import { MouseEvent, useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";
import SignIn from "./SignIn";
import { UserAuth } from "../context/AuthContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [name, setName] = useState("");
  const [value, setValue] = useState<string>("");

  const { createUser } = UserAuth();

  const signUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    try {
      await createUser(email, password);
    } catch (e: any) {
      setError(e.message);
      console.log(e.message);
    }
  };

  // const signUp = (e: any) => {
  //   e.preventDefault();
  //   signInWithPopup(auth, provider).then((data) => {
  //     if (data.user.email) {
  //       setValue(data.user.email);
  //       localStorage.setItem("email", data.user.email);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // }, []);

  return (
    <div className="absolute top-[30%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
      {/* {value ? (
        <CartItems />
      ) : (
        <button onClick={signUp}>Sign With Google</button>
      )} */}
      {
        <form onSubmit={signUp}>
          <h1>Create Account</h1>
          <p>
            Already have an account?{" "}
            <Link
              className="underline font-medium text-blue-600 dark:text-blue-500"
              to="/login"
            >
              Sign in{" "}
            </Link>{" "}
          </p>
          <div>
            <input
              type="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Sign Up</button>
        </form>
      }
    </div>
  );
}

export default SignUp;
