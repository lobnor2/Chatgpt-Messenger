import React from "react";
import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div className=" flex flex-col h-screen">
      <div className="flex-1">
        {/* newchat button */}
        <div className="bg-[#202123] max-w-xs h-screen overflow-y-auto md:min-w-[20rem] p-2">
          <NewChat />
        </div>
        <div>{/* modelselection  */}</div>
        {/* map through the chatrows */}
      </div>
    </div>
  );
};

export default SideBar;
