import React from "react";
import NewChat from "./NewChat";

const SideBar = () => {
  return (
    <div className=" flex flex-col h-screen">
      <div className="flex-1">
        <div>
          <NewChat />

          <div>{/* modelselection  */}</div>

          {/* map through the chatrows */}
        </div>
      </div>
    </div>
  );
};

export default SideBar;
