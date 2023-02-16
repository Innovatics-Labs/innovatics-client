import { signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword } from "firebase/auth";
import { useCallback, useState } from "react";

const useSignInWithEmailAndPassword = (auth) => {
  const [error, setError] = useState();
  const [loggedInUser, setLoggedInUser] = useState();
  const [loading, setLoading] = useState(false);

  const signInWithEmailAndPassword = useCallback(
    async (email, password) => {
      setLoading(true);
      setError(undefined);
      try {
        const user = await firebaseSignInWithEmailAndPassword(
          auth,
          email,
          password
        );
        setLoggedInUser(user);

        return user;
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    },
    [auth]
  );

  return [signInWithEmailAndPassword, loggedInUser, loading, error];
};

export default useSignInWithEmailAndPassword;
