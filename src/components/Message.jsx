import React from "react";

export default function Message({ message, isSelf }) {
  return (
    <div className={`mx-2 mb-0.5 ${isSelf && "self-end"}`}>
      <small className="text-xs text-gray-700 mx-1">
        {!isSelf && message.from.name}
      </small>
      <p className="max-w-md md:max-w-xl bg-white py-2 px-3  rounded-3xl">
        {message.text}
      </p>
    </div>
  );
}
