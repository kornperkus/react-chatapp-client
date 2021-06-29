import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function WelcomePage() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  function submitForm(e) {
    if (!name || !room) {
      e.preventDefault();
      return;
    }

    const query = `/chat?name=${name}&room=${room}`;
    history.push(query);
  }

  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl md:text-6xl text-white self-center mb-10">
        Roomie!
      </h1>
      <form className="flex flex-col items-center" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Name"
          autoComplete="off"
          className="w-5/6 md:w-3/6 rounded p-2 mb-3"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Room #CODE"
          autoComplete="off"
          className="w-5/6 md:w-3/6 rounded p-2 mb-5"
          onChange={(e) => setRoom(e.target.value)}
        />
        <input
          type="submit"
          value="Enter"
          className="w-2/6 md:w-1/6 rounded-lg py-1 px-2 text-lg uppercase bg-yellow-500 hover:bg-yellow-400"
        />
      </form>
      <p className="text-gray-700 text-center text-sm mt-5">
        You can get room code from your friends or
      </p>
      <a href="/create" className="text-white uppercase text-center text-sm">
        create new room
      </a>
    </div>
  );
}
