import { FC, ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

type Props = {
  children: ReactNode;
};

const Protected: FC<Props> = ({ children }) => {
  const { user } = UserAuth();
  if (!user) {
    return (
      <>
        <Navigate to="/login" replace />;
      </>
    );
  }

  return <>{children}</>;
};

export default Protected;
