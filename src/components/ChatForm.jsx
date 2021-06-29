import React from "react";

export default function ChatForm() {
  return (
    <form className="flex mt-3">
      <input
        type="text"
        placeholder="Say something..."
        className="flex-grow py-1 px-2"
      />
      <input
        type="submit"
        value="send"
        className="w-3/12 bg-green-600 uppercase text-white"
      />
    </form>
  );
}
