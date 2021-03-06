import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function CreateRoomPage() {
  const history = useHistory();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  useEffect(() => {
    setRoom(getRoomCode());
  }, []);

  function submitForm(e) {
    if (!name) {
      e.preventDefault();
      return;
    }

    const query = `/chat?name=${name}&room=%23${room}`;
    history.push(query);
  }

  function getRoomCode() {
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += Math.floor(Math.random() * 10);
    }
    return code;
  }

  return (
    <div className="bg-blue-500 min-h-screen flex flex-col justify-center">
      <h1 className="text-5xl md:text-6xl text-white self-center mb-10">
        Create Room
      </h1>
      <form className="flex flex-col items-center" onSubmit={submitForm}>
        <input
          type="text"
          placeholder="Name"
          autoComplete="off"
          className="w-5/6 md:w-3/6 rounded p-2 mb-3"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type="text"
          placeholder="Room #CODE"
          className="w-5/6 md:w-3/6 rounded p-2 mb-5 text-gray-700"
          disabled="true"
          value={`#${room}`}
        />
        <input
          type="submit"
          value="Enter"
          className="w-2/6 md:w-1/6 rounded-lg py-1 px-2 text-lg uppercase bg-yellow-500 hover:bg-yellow-400"
        />
      </form>
      <p className="text-gray-700 text-center text-sm mt-5">
        Create and share the room code for your friends!
      </p>
    </div>
  );
}
