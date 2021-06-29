import React, { useState, useEffect, useRef } from "react";
import io from "socket.io-client";
import queryString from "query-string";
import { useHistory } from "react-router";

import Friend from "../components/Friend";
import Message from "../components/Message";
import ChatForm from "../components/ChatForm";

let socket;

export default function ChatPage() {
  const user = queryString.parse(location.search);
  const [users, setUsers] = useState([]);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    connect(user);
    return () => disconnect();
  }, []);

  function connect(user) {
    socket = io("http://localhost:5000");
    console.log("Chat: Connecting...");

    if (socket && user) socket.emit("join", user);

    socket.on("room-updated", (users) => setUsers(users));

    socket.on("message", (message) => {
      console.log(message);
      setMessages((state) => [...state, message]);
      scrollBottom();
    });
  }

  function disconnect() {
    console.log("Chat: Disconnecting...");
    if (socket) {
      socket.emit("leave", user.room);
      socket.disconnect();
    }
  }

  function sendMessage(message) {
    if (socket)
      socket.emit("message", {
        from: { id: socket.id, name: user.name },
        to: user.room,
        text: message,
      });
  }

  function isSelf(id) {
    return id === socket.id;
  }

  const bottom = useRef(null);
  function scrollBottom() {
    bottom.current?.scrollIntoView({ nehavior: "smooth" });
  }

  return (
    <div className="bg-blue-500 min-h-screen flex flex-col">
      <ChatHeader room={user.room} />

      <div className="flex flex-wrap gap-1 mx-3 m-1">
        {users.map((user) => (
          <Friend key={user.id} user={user} />
        ))}
      </div>

      <div className="flex flex-col items-baseline flex-grow">
        {messages.map((message, index) => (
          <Message
            key={index}
            message={message}
            isSelf={isSelf(message.from.id)}
          />
        ))}
      </div>

      <ChatForm onSubmit={sendMessage} />
      <div ref={bottom} />
    </div>
  );
}

function ChatHeader({ room }) {
  const history = useHistory();

  return (
    <div className="bg-gray-700 text-white rounded m-1 p-3 flex">
      <p className="flex-grow self-center">Room: {room}</p>
      <button
        className="bg-gray-800 py-1 px-5 rounded-md"
        onClick={() => {
          history.replace("/");
        }}
      >
        Leave
      </button>
    </div>
  );
}
