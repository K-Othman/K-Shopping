import { useState } from "react";
import { UserAuth } from "../context/AuthContext";

function Checkout() {
  const { user, logOut } = UserAuth();
  const handleSignOut = async () => {
    try {
      await logOut();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <p> Checkout</p>

        {user?.displayName
          ? `Welcome ${user?.displayName} Your are about to checkout`
          : `Hi, You are about to checkout `}
      </div>
      <p>Or</p>
      <button
        className="text-sm font-medium text-blue-600 dark:text-blue-500 hover:underline"
        onClick={handleSignOut}
      >
        Logout
      </button>
    </>
  );
}

export default Checkout;
