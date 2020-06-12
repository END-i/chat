import React, { useState, useEffect } from "react";

import { IEventValue, IEventKey, IFormProps } from "utils/types";
import { Wrapper, Field, Error } from "./styled";

export default function ({
  submit,
  fields,
  button: SubmitButton,
  grid = { col: "1fr", row: "1fr" },
  errors = {},
}: IFormProps) {
  const [error, setError] = useState<{ [key: string]: string }>({});
  const [values, setValues] = useState<{ [key: string]: string }>({});
  const [touched, setTouched] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    fields.forEach(({ rules, name, value = "" }) => {
      checkField(name, value, rules);
      setValues((prev) => ({ ...prev, [name]: value }));
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkField = (
    name: string,
    value: string,
    rules: { regex: RegExp; message: string }[] = [],
  ) => {
    for (let i in rules) {
      const { message, regex } = rules[i];
      if (value.match(regex)) {
        setError((prev) => {
          const newPrev = { ...prev };
          delete newPrev[name];
          return newPrev;
        });
        setTouched((prev) => {
          const newPrev = { ...prev };
          delete newPrev[name];
          return newPrev;
        });
      } else {
        setError((prev) => ({ ...prev, [name]: message }));
        setTouched((prev) => ({ ...prev, [name]: false }));
        break;
      }
    }
  };

  const fieldsChecker = (name: string, value: string) => {
    const field = fields.find((f) => f.name === name);
    if (field) {
      checkField(name, value, field.rules);
    }
    return false;
  };

  const handleChange = (name: string, { target: { value } }: IEventValue) => {
    fieldsChecker(name, value);
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const onEnter = ({ key }: IEventKey) => {
    if (key === "Enter") {
      onSubmit();
    }
  };

  const onSubmit = () => {
    for (let i in touched) {
      setTouched((prev) => ({ ...prev, [i]: true }));
    }
    if (!Object.keys(error).length) {
      submit(values);
      setValues({});
    }
  };

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      {fields.map(({ name, label, value, input: FormInput }) => {
        return (
          <Field key={name} grid={grid}>
            <span>{label ? `${label}:` : ""}</span>
            <FormInput
              onChange={(e: IEventValue) => handleChange(name, e)}
              onKeyUp={onEnter}
              error={touched[name] && error[name]}
              defaultValue={value}
              value={values[name] || ""}
            />
            <div />
            <Error>{touched[name] && error[name]}</Error>
          </Field>
        );
      })}
      <SubmitButton onClick={onSubmit} type="button" />
    </Wrapper>
  );
}
