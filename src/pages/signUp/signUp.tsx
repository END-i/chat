import React from "react";

import { IFieldInputProps, ISignUpFunction } from "utils/types";
import { auth } from "utils/firebase";
import { useDispatch } from "utils/context";
import { Form } from "components";
import { Input, Button, AuthFormTitle, AuthWrapperForm } from "components/styled";

export default function () {
  const dispatch = useDispatch();

  const signUp = async ({ name, email, password }: ISignUpFunction) => {
    try {
      dispatch("loading", true);
      await auth.createUserWithEmailAndPassword(email, password).catch((error) => {
        dispatch("notifications", {
          type: "error",
          title: error.code || "Oops Something went wrong!",
          content: error.message || "",
        });
      });
      await auth.onAuthStateChanged((user) => {
        user?.updateProfile({
          displayName: name,
        });
      });
      dispatch("loading", false);
    } catch (err) {
      console.log("err :>> ", err);
      dispatch("notifications", {
        type: "error",
        title: "Oops Something went wrong!",
      });
      dispatch("loading", false);
    }
  };

  const fields = [
    {
      name: "name",
      label: "Name",
      rules: [
        { message: "Name is too short", regex: /^.{2,}$/g },
        { message: "Name is too long", regex: /^.{2,128}$/g },
        {
          message: "Valid characters are a-z and 0-9",
          regex: /^[a-zA-Z 0-9]{2,128}$/g,
        },
      ],
      input: (props: IFieldInputProps) => <Input placeholder="Name" {...props} />,
    },
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
        {
          message: "Password is weak. At least 8 characters, one number, letters a-z, A-Z",
          regex: /^(?=.*[A-Z])(?=.*[0-9])(?=.*[a-zA-Z]).{8,128}$/g,
        },
      ],
      input: (props: IFieldInputProps) => (
        <Input placeholder="Password" type="password" {...props} />
      ),
    },
  ];

  return (
    <AuthWrapperForm>
      <div>
        <AuthFormTitle>Sign Up</AuthFormTitle>
        <Form
          fields={fields}
          submit={signUp}
          button={(props) => <Button {...props}>Sig In</Button>}
          grid={{
            col: "100px 1fr",
            row: "1fr",
          }}
        />
      </div>
    </AuthWrapperForm>
  );
}
