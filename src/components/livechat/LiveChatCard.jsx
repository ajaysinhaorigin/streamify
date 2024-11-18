import React from "react";

const LiveChatCard = ({ name, message }) => {
  return (
    <div className="m-1 px-5 py-2 flex ">
      <h1 className="text-zinc-500 pr-3">{name}</h1>
      <h1 className="text-white">{message}</h1>
    </div>
  );
};

export default LiveChatCard;
