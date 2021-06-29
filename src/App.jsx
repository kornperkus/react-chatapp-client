import React, { useState } from "react";
import { Route } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import ChatPage from "./pages/ChatPage";
import CreateRoomPage from "./pages/CreateRoomPage";

function App() {
  return (
    <>
      <Route path="/" exact component={WelcomePage} />
      <Route path="/chat" component={ChatPage} />
      <Route path="/create" component={CreateRoomPage} />
    </>
  );
}

export default App;
