import React from "react";

export default function Friend({ user }) {
  return (
    <div className="bg-yellow-200 text-sm py-1 px-2 rounded text-center">
      {user.name}
    </div>
  );
}
