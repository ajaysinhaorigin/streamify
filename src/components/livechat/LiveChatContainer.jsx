import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addLiveMessage } from "../../features/liveChatSlice";
import LiveChatCard from "./LiveChatCard";
import { generateName, generateText } from "../../common/helperFunctions";
import User from "../head/User";

const LiveChatContainer = () => {
  const [showChat, setShowChat] = useState(true);
  const [liveMessage, setLiveMessage] = useState("");
  const { liveChat } = useSelector((store) => store.liveChat);
  const dispatch = useDispatch();
  useEffect(() => {
    setInterval(() => {
      getLiveChat();
    }, 1500);
  }, []);

  const getLiveChat = () => {
    let name = generateName();
    let message = generateText(20);
    dispatch(addLiveMessage({ name: name, message: message }));
  };

  return (
    <>
      {" "}
      {showChat === true ? (
        <div className="ml-3 border border-zinc-700 rounded-xl bg-[#0f0f0f]">
          <h1 className="text-xl border-b border-zinc-700 px-5 py-3 text-white rounded-t-xl">
            Live Chat
          </h1>
          <div className="h-[300px] overflow-y-scroll flex flex-col-reverse  text-white">
            {liveChat?.map((liveChat, i) => (
              <LiveChatCard
                name={liveChat?.name}
                message={liveChat?.message}
                key={i}
              />
            ))}
          </div>
          <div className="border-t px-5 border-zinc-700 py-3 flex">
            <User />
            <form
              className="ml-1 text-sm text-zinc-400 font-medium w-full d"
              onSubmit={(e) => {
                e.preventDefault();
                dispatch(
                  addLiveMessage({ name: "Ajay", message: liveMessage })
                );
                setLiveMessage("");
              }}
            >
              <p className="">Luffy</p>
              <input
                className="bg-[#0f0f0f] border-b focus:outline-none focus:border-blue-400 border-zinc-700 text-white w-10/12 py-1"
                placeholder="chat..."
                type="text"
                value={liveMessage}
                onChange={(e) => setLiveMessage(e.target.value)}
              />
              <button className="text-zinc-600 ">
                <div className="fill-current">
                  <svg
                    height="26"
                    viewBox="0 0 26 26"
                    width="26"
                    focusable="false"
                  >
                    <path
                      d="M5,12L3,3l19,9L3,21L5,12z M5.82,12.93L17,12L5.82,11.07l-1.4-6.29L19.66,12 L4.42,19.22L5.82,12.93z"
                      fillRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            </form>
          </div>
          <div className="border-t border-zinc-700 p-2 ">
            <button
              className=" py-2 w-full rounded-full hover:bg-zinc-700 text-white "
              onClick={() => setShowChat(false)}
            >
              Hide Chat
            </button>
          </div>
        </div>
      ) : (
        <div className="">
          <button
            className="ml-3 py-[0.32rem] w-full rounded-full border border-zinc-700 hover:bg-zinc-700  text-white "
            onClick={() => setShowChat(true)}
          >
            show Chat
          </button>
        </div>
      )}
    </>
  );
};

export default LiveChatContainer;
