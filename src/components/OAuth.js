import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { doc, setDoc, getDoc, serverTimestamp } from "firebase/firestore";
import { useRouter } from "next/router";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";
import styled from "styled-components";
import { auth, db } from "../../firebaseConfig";
import Button from "./Button";

function OAuth() {
  const router = useRouter();

  const onGoogleClick = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Check for user
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      // If user, doesn't exist, create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, "users", user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }
      if (user) {
        router.push("/dashboard");
      }
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  };

  return (
    <FormButton
      onClick={onGoogleClick}
      variant={"outline"}
      title={"Continue with Google"}
      color={"#8691A6"}
      IconLeft={<FcGoogle />}
    />
    // <div className="socialLogin">
    //   <p>Sign {location.pathname === "/sign-up" ? "up" : "in"} with </p>
    //   <button className="socialIconDiv" onClick={onGoogleClick}>
    //     <img className="socialIconImg" src={googleIcon} alt="google" />
    //   </button>
    // </div>
  );
}

export default OAuth;

const FormButton = styled(Button)`
  border-color: #8691a6;
  width: 100%;
`;
