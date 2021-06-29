import React, { useState } from "react";

export default function ChatForm({ onSubmit }) {
  const [message, setMessage] = useState("");

  function onSubmitForm(e) {
    e.preventDefault();
    onSubmit(message);
  }

  return (
    <form className="flex mt-3" onSubmit={onSubmitForm}>
      <input
        type="text"
        placeholder="Say something..."
        className="flex-grow py-1 px-2"
        onChange={(e) => setMessage(e.target.value)}
      />
      <input
        type="submit"
        value="send"
        className="w-3/12 bg-green-600 uppercase text-white"
      />
    </form>
  );
}
