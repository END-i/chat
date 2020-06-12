import React, { useEffect, useState } from "react";

import { IEventKey, IEventValue, IMessage } from "utils/types";
import { db } from "utils/firebase";
import { useGlobalState, useDispatch } from "utils/context";
import { Input, Button } from "components/styled";
import {
  Wrapper,
  InputWrapper,
  Messages,
  Message,
  User,
  Name,
  Avatar,
  Text,
  Timestamp,
} from "./styled";

export default function () {
  const { uid, user } = useGlobalState();
  const dispatch = useDispatch();
  const [value, setValue] = useState<string>("");
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    get();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const removeMessages = (req: IMessage[]) => {
    const mes = req[req.length - 1];
    db.ref(`chats/${mes.key}`).remove();
  };

  const get = async () => {
    try {
      db.ref("chats").on("value", (snapshot) => {
        console.log("snapshot :>> ", snapshot);
        let req: IMessage[] = [];
        snapshot.forEach((snap) => {
          req.push(snap.val());
        });
        req.sort((a, b) => {
          if (a.timestamp < b.timestamp) {
            return 1;
          }
          if (a.timestamp > b.timestamp) {
            return -1;
          }
          return 0;
        });
        if (req.length > 1000) {
          removeMessages(req);
        }
        setMessages(req);
      });
    } catch (error) {
      dispatch("notifications", { type: "error", title: "Oops Something went wrong!" });
    }
  };

  const onEnter = ({ key }: IEventKey) => {
    if (key === "Enter") {
      addMessage();
    }
  };

  const addMessage = async () => {
    try {
      if (value) {
        const date = Date.now();
        const req = await db.ref("chats").push({
          content: value,
          timestamp: date,
          userId: uid,
          user,
          id: date,
        });
        if (!req.key) {
          dispatch("notifications", {
            type: "error",
            title: "Message not sent. Something went wrong!",
          });
        } else {
          setValue("");
          await db.ref(`chats/${req.key}`).update({ key: req.key });
        }
      }
    } catch (error) {
      dispatch("notifications", { type: "error", title: "Oops Something went wrong!" });
    }
  };

  const handleChange = ({ target: { value } }: IEventValue) => {
    setValue(value.replace(/\s\s+/g, " "));
  };

  return (
    <Wrapper>
      <Messages>
        {messages.map(({ id, timestamp, userId, content, user: { name, photo } }) => {
          const zero = (num: number) => (num < 10 ? `0${num}` : `${num}`);
          const date = new Date(timestamp);
          const time = `${zero(date.getDate())}/${
            date.getMonth() + 1
          }/${date.getFullYear()}, ${zero(date.getHours())}:${zero(date.getMinutes())}`;
          return (
            <Message current={uid === userId} key={id}>
              <User>
                <Name>{name}</Name>
                <Avatar image={photo} />
              </User>
              <Text>{content}</Text>
              <Timestamp>{time}</Timestamp>
            </Message>
          );
        })}
      </Messages>
      <InputWrapper>
        <Input placeholder="New message" onKeyUp={onEnter} onChange={handleChange} value={value} />
        <Button onClick={addMessage}>Send</Button>
      </InputWrapper>
    </Wrapper>
  );
}
