import React, { useState, useEffect } from "react";

import { Wrapper } from "./styled";
import { useDispatch, useGlobalState } from "utils/context";
import { INotification } from "utils/types";
import Message from "./messages";

type NotifList = INotification & { id: number };

const Notification = () => {
  const [notifList, setNotifList] = useState<NotifList[]>([]);
  const dispatch = useDispatch();
  const { notifications } = useGlobalState();

  useEffect(() => {
    if (notifications) {
      add(notifications);
    }
  }, [notifications]);

  const add = (notif: INotification) => {
    const id = new Date().getTime();
    setNotifList((prev) => [...prev, { ...notif, id }]);
  };

  const remove = (id: number) => () => {
    setNotifList((prev) => {
      if (prev.length < 1) {
        dispatch("notifications", null);
        return [];
      } else {
        return prev.filter((t) => t.id !== id);
      }
    });
  };

  return (
    <Wrapper>
      {notifList.map(({ id, ...message }, key) => (
        <Message key={id} remove={remove(id)} {...message} idx={key} />
      ))}
    </Wrapper>
  );
};

export default Notification;
