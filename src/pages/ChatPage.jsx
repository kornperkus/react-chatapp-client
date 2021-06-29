import React from "react";
import Friend from "../components/Friend";
import Message from "../components/Message";
import ChatForm from "../components/ChatForm";

export default function ChatPage() {
  return (
    <div className="bg-blue-500 min-h-screen flex flex-col">
      <div className="bg-gray-700 text-white rounded m-1 p-3 flex">
        <p className="flex-grow self-center">Room: #abc123</p>
        <button className="bg-gray-800 py-1 px-5 rounded-md">Leave</button>
      </div>

      <div className="flex flex-wrap gap-1 mx-3 m-1">
        <Friend user={{ name: "Chakorn Mara" }} />
        <Friend user={{ name: "Bot1" }} />
        <Friend user={{ name: "Kornperkus" }} />
      </div>

      <div className="flex flex-col items-baseline flex-grow">
        <Message message="Hello, how are you doing" isSelf={false} />
        <Message
          message="Hello, how are you doing Hello, how are you doing Hello, how are you doing"
          isSelf={true}
        />
        <Message message="Hello, how are you doing" isSelf={false} />
      </div>

      <ChatForm />
    </div>
  );
}
