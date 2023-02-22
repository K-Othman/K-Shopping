import { createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import CartItems from "../components/CartItems";

function SignUp() {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const [value, setValue] = useState<string>("");

  const signUp = () => {
    // e.preventDefault();
    signInWithPopup(auth, provider).then((data) => {
      if (data.user.email) {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      }
    });
  };

  // useEffect(() => {
  //   setValue(localStorage.getItem("email"));
  // }, []);

  return (
    <div className="sign-in-container">
      {value ? (
        <CartItems />
      ) : (
        <button onClick={signUp}>Sign With Google</button>
      )}
      {/* <form onSubmit={signUp}>
        <h1>Create Account</h1>
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
        <button type="submit">Sign Up</button>
      </form> */}
    </div>
  );
}

export default SignUp;
