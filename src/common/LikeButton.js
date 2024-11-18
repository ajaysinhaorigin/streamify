import React, { useState } from "react";
import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { BiDislike, BiSolidDislike } from "react-icons/bi";

const LikeButton = ({ like }) => {
  const [clickEvent, setclickEvent] = useState(false);
  return (
    <>
      {like === true ? (
        <button onClick={() => setclickEvent(!clickEvent)}>
          {clickEvent === true ? (
            <AiFillLike className="text-2xl" />
          ) : (
            <AiOutlineLike className="text-2xl" />
          )}
        </button>
      ) : (
        <button className="" onClick={() => setclickEvent(!clickEvent)}>
          {clickEvent === true ? (
            <BiSolidDislike className="text-2xl" />
          ) : (
            <BiDislike className="text-2xl " />
          )}
        </button>
      )}
    </>
  );
};

export default LikeButton;
