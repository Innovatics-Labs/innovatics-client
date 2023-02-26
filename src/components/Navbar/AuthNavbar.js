import Link from "next/link";
import { useRouter } from "next/router";
import { signOut } from "firebase/auth";
import { FaRegUserCircle } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";

import UnstyledButton from "../UnstyledButton";
import styled from "styled-components";

const AuthNavbar = ({ loading, auth }) => {
  const route = useRouter();

  const signOutHandler = async () => {
    if (!loading) {
      await signOut(auth);
      route.push("/");
    }
  };

  return (
    <>
      <li>
        <Link href={"/search"}>
          <BiSearch size={24} />
        </Link>
      </li>
      <li>
        <User href={"/dashboard/profile"}>
          <FaRegUserCircle size={24} />
        </User>
      </li>
      <SignInButton>
        <UnstyledButton onClick={signOutHandler}>Sign Out</UnstyledButton>
      </SignInButton>
    </>
  );
};

export default AuthNavbar;

const User = styled(Link)`
  display: inline-block;
  border-radius: 50%;
  padding: 0.5rem;
  background: linear-gradient(180deg, #8b90ff 0%, #eb73ff 100%);
`;

const SignInButton = styled.li`
  border: 1px solid white;
  border-radius: 7px;
  padding: 5px;
  padding-inline: 10px;
`;
