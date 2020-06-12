import React from "react";

import { IFieldInputProps, ISignInFunction } from "utils/types";
import { useDispatch } from "utils/context";
import { auth, googleProvider, facebookProvider, githubProvider } from "utils/firebase";
import { Form } from "components";
import { Input, Button, AuthFormTitle, AuthWrapperForm, SocialWrapper } from "components/styled";
import { ReactComponent as FacebookIcon } from "assets/icons/facebook.svg";
import { ReactComponent as GoogleIcon } from "assets/icons/google.svg";
import { ReactComponent as GithubIcon } from "assets/icons/github.svg";

export default function () {
  const dispatch = useDispatch();

  const fields = [
    {
      name: "email",
      label: "Email",
      rules: [
        {
          message: "Invalid Email",
          regex: /^([a-z0-9._+-]{2,})+@([a-z0-9.-]{2,})+\.[a-z]{2,3}$/g,
        },
      ],
      input: (props: IFieldInputProps) => <Input placeholder="Email" type="email" {...props} />,
    },
    {
      name: "password",
      label: "Password",
      rules: [
        { message: "Password is too short. Minimum 8 characters", regex: /^.{8,}$/g },
        { message: "Password is too short. Maximum 128 characters", regex: /^.{8,128}$/g },
      ],
      input: (props: IFieldInputProps) => (
        <Input placeholder="Password" type="password" {...props} />
      ),
    },
  ];

  const signIn = async ({ email, password }: ISignInFunction) => {
    try {
      await dispatch("loading", true);
      await auth.signInWithEmailAndPassword(email, password).catch((error) => {
        dispatch("notifications", {
          type: "error",
          title: error.code || "Oops Something went wrong!",
          content: error.message || "",
        });
      });
      await dispatch("loading", false);
    } catch (err) {
      dispatch("notifications", {
        type: "error",
        title: "Oops Something went wrong!",
      });
      dispatch("loading", false);
    }
  };

  const signInWithSocial = (key: string) => {
    const providers: { [key: string]: any } = {
      google: googleProvider,
      facebook: facebookProvider,
      github: githubProvider,
    };

    auth.signInWithPopup(providers[key]).catch((err) => {
      console.log("err :>> ", err);
      dispatch("notifications", { type: "error", title: err.code, content: err.message || "" });
    });
  };

  return (
    <AuthWrapperForm>
      <div>
        <AuthFormTitle>Sign In:</AuthFormTitle>
        <Form
          fields={fields}
          submit={signIn}
          button={(props) => <Button {...props}>Sig In</Button>}
          errors={{}}
          grid={{
            col: "100px 1fr",
            row: "1fr",
          }}
        />
      </div>
      <h2>OR</h2>
      <SocialWrapper onClick={() => signInWithSocial("facebook")}>
        <FacebookIcon />
        FaceBook
      </SocialWrapper>
      <SocialWrapper onClick={() => signInWithSocial("google")}>
        <GoogleIcon />
        Google
      </SocialWrapper>
      <SocialWrapper onClick={() => signInWithSocial("github")}>
        <GithubIcon />
        GitHub
      </SocialWrapper>
    </AuthWrapperForm>
  );
}
