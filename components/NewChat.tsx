import { PlusIcon } from "@heroicons/react/24/solid";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { db } from "../firebase";

const NewChat = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const createNewChat = async () => {
    const doc = await addDoc(
      collection(db, "users", session?.user?.email!, "chats"),
      {
        userId: session?.user?.email!,
        createdAt: serverTimestamp(),
      }
    );
    router.push(`/chat/${doc.id}`);
  };
  return (
    <div
      onClick={createNewChat}
      className="flex items-center border border-gray-700 rounded-lg px-5 py-3 text-sm justify-center space-x-2 hover:bg-gray-700/70 cursor-pointer text-gray-300 transition-all duration-200 ease-out"
    >
      <PlusIcon className="h-4 w-4" />

      <p>New Chat</p>
    </div>
  );
};

export default NewChat;
