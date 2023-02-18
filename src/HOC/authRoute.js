import React, { useContext } from "react";
import { useRouter } from "next/router";
import { AuthContext } from "../context/AuthContext";

const AuthRoute = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const Router = useRouter();

  if (currentUser) {
    return <>{children}</>;
  } else {
    Router.push("/signIn");
    return <></>;
  }
};

export default AuthRoute;
