import React from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import MainMenu from "./component/MainMenu";
import Users from "./component/Users";
import ChatSection from "./component/ChatSection";

const App = () => {
  return (
    <div className="h-auto flex flex-col bg-gray-50">
      
      <Navbar />

      <div className="h-[1.5px] bg-gray-200 w-full"></div>

      <div className="flex flex-1 overflow-hidden">
        <Sidebar />

        <div className="w-[1px] bg-gray-200"></div>

        <MainMenu />
        <Users/>
        <ChatSection/>
      </div>
    </div>
  );
};

export default App;
