import React from "react";
import { useHistory } from "react-router-dom";

import { useGlobalState, useDispatch } from "utils/context";
import { auth } from "utils/firebase";
import { Wrapper, Button, Logo, User, Name, Avatar } from "./styled";

export default function () {
  const { isAuth, user } = useGlobalState();
  const dispatch = useDispatch();
  const { push } = useHistory();

  const signOut = () => {
    try {
      dispatch("uid", "");
      auth
        .signOut()
        .then(function () {
          console.log("success :>> ");
        })
        .catch(function (error) {
          console.log("error :>> ", error);
        });
    } catch (err) {
      console.log("error :>> ", err);
    }
  };

  if (!isAuth) {
    return (
      <Wrapper>
        <Logo onClick={() => push("/sign_in")}>CHAT</Logo>
        <Button onClick={() => push("/sign_in")}>Sign In</Button>
        <Button onClick={() => push("/sign_up")}>Sign Up</Button>
        <Button onClick={() => push("/recovery")}>Recovery</Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Logo onClick={() => push("/sign_in")}>CHAT</Logo>
      {user && (
        <User>
          <Name>{user.name}</Name>
          <Avatar image={user.photo} />
        </User>
      )}
      <Button onClick={signOut}>Sign Out</Button>
    </Wrapper>
  );
}
