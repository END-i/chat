import React, { useEffect } from "react";

import { IAuthUser } from "utils/types";
import { auth } from "utils/firebase";
import { useDispatch } from "utils/context";
import pikachu from "assets/images/pikachu.png";
// import Spinner from "./spinner";

export default function ({ children }: any) {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser: IAuthUser) => {
      console.log("authUser :>> ", authUser);
      if (authUser?.displayName) {
        dispatch("user", {
          name: authUser.displayName || "Anonymous",
          photo: authUser.photoURL || pikachu,
        });
      }
      if (authUser?.uid) {
        dispatch("uid", authUser.uid);
      }
      dispatch("isAuth", Boolean(authUser));
    });

    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {/* <Spinner /> */}
      {children}
    </>
  );
}
