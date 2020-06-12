import React from "react";
import { useHistory } from "react-router-dom";

import { useDispatch } from "utils/context";
import { IFieldInputProps, IRecoveryFunction } from "utils/types";
import { auth } from "utils/firebase";
import { Form } from "components";
import { Input, Button, AuthFormTitle, AuthWrapperForm } from "components/styled";

export default function () {
  const dispatch = useDispatch();
  const { push } = useHistory();

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
  ];

  const recoveryPassword = ({ email }: IRecoveryFunction) => {
    try {
      dispatch("loading", true);
      auth
        .sendPasswordResetEmail(email)
        .then(() => {
          dispatch("notifications", {
            type: "success",
            title: "Password reset email sent",
          });
          push("/sign_in");
        })
        .catch((error) => {
          dispatch("notifications", {
            type: "error",
            title: error.message || "Oops Something went wrong!",
          });
        });
      dispatch("loading", false);
    } catch (err) {
      dispatch("notifications", {
        type: "error",
        title: "Oops Something went wrong!",
      });
      dispatch("loading", false);
    }
  };
  return (
    <AuthWrapperForm>
      <div>
        <AuthFormTitle>Recovery:</AuthFormTitle>
        <Form
          fields={fields}
          submit={recoveryPassword}
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
