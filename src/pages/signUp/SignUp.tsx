import { useContext, useEffect, useState } from "react";

import { UserAuth } from "../../context/AuthContext";
import { ProductsContext } from "../../context/productsContext";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { loading } = useContext(ProductsContext);

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
  if (loading) {
    return (
      <span className="loader  absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] "></span>
    );
  }

  return (
    <div className="h-[100vh]  ">
      {
        <form
          onSubmit={signUp}
          className="w-[500px] mx-auto bg-[#EEE] mt-10 rounded-lg p-10"
        >
          <h1 className=" mb-6 text-lg text-center">Create Account</h1>
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
            Sign Up
          </button>
        </form>
      }
    </div>
  );
}

export default SignUp;
