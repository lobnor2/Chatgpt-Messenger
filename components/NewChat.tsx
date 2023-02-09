import { PlusIcon } from "@heroicons/react/24/solid";
import React from "react";

const NewChat = () => {
  return (
    <div className="flex items-center border border-gray-700 rounded-lg px-5 py-3 text-sm justify-center space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out">
      <PlusIcon className="h-4 w-4" />

      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
