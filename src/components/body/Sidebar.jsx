import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setButtonName } from "../../features/sidebarSlice";

const Sidebar = () => {
  const { buttonName } = useSelector((store) => store.sidebar);
  const isMenuOn = useSelector((store) => store.app.isMenuOn);

  const dispatch = useDispatch();

  const path = window.location.search ? `${window.location.pathname}${window.location.search}` : window.location.pathname
  // console.log('path',path,path === "/channel/UCkYQyvc_i9hXEo4xic9Hh2g"   )

  const handleClick = (buttonName) => {
    console.log(buttonName);
    dispatch(setButtonName(buttonName));
  };

  if (!isMenuOn) return null;

  return (
    <ul className="fixed z-10 overflow-y-hidden hover:overflow-auto h-[90%] px-3 py-2 mt-16 bg-[#0f0f0f]">
      <Link to="/">
        <li
          className={
            path === "/" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className=" hover:bg-zinc-800 hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current text-white">
            <svg
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              className="mr-4"
              focusable="false"
            >
              <g>
                <path d="M4 21V10.08l8-6.96 8 6.96V21h-6v-6h-4v6H4z"></path>
              </g>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>Home</p>
          </div>
        </li>
      </Link>
      {/* <li className="">
        <div className="fill-current hover:bg-zinc-800 hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex text-white">
          <svg
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
            className="mr-4"
          >
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
          </svg>
          <p>Shorts</p>
        </div>
      </li>
      <li className="">
        <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
          <svg
            className="mr-4"
            enableBackground="new 0 0 24 24"
            height="24"
            viewBox="0 0 24 24"
            width="24"
            focusable="false"
          >
            <path d="M10 18v-6l5 3-5 3zm7-15H7v1h10V3zm3 3H4v1h16V6zm2 3H2v12h20V9zM3 10h18v10H3V10z"></path>
          </svg>
          <p>Subscriptions</p>
        </div>
      </li> */}
      <h1 className="pt-2 text-white font-medium mb-2">Explore</h1>
      <Link to="/feed/trending?bp=6gQJRkVleHBsb3Jl">
        <li
          className={
            path === "/feed/trending?bp=6gQJRkVleHBsb3Jl" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
            <svg
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="mr-4"
            >
              <path d="M19 3.87v9.77C19 17.7 15.86 21 12 21s-7-3.3-7-7.37v-.13c0-1.06.22-2.13.62-3.09.5-1.19 1.29-2.21 2.27-2.97.85-.66 1.83-1.14 2.87-1.65.39-.19.77-.38 1.15-.58.36-.19.72-.38 1.08-.56v3.22l1.55-1.04L19 3.87M20 2l-6 4V3c-.85.44-1.7.88-2.55 1.33-1.41.74-2.9 1.34-4.17 2.32-1.13.87-2.02 2.05-2.58 3.37-.46 1.09-.7 2.29-.7 3.48v.14C4 18.26 7.58 22 12 22s8-3.74 8-8.36V2zM9.45 12.89 14 10v5.7c0 1.82-1.34 3.3-3 3.3s-3-1.47-3-3.3c0-1.19.58-2.23 1.45-2.81z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>Trending</p>
          </div>
        </li>
      </Link>
      <Link to="/channel/UCkYQyvc_i9hXEo4xic9Hh2g">
        <li
          className={
            path === "/channel/UCkYQyvc_i9hXEo4xic9Hh2g" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="mr-4"
            >
              <path d="M7 8c0 2.76 2.24 5 5 5s5-2.24 5-5h-1c0 2.21-1.79 4-4 4s-4-1.79-4-4H7zm9.9-2c-.46-2.28-2.48-4-4.9-4S7.56 3.72 7.1 6H4v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V6h-3.1zM12 3c1.86 0 3.43 1.27 3.87 3H8.13c.44-1.73 2.01-3 3.87-3zm7 17c0 .55-.45 1-1 1H6c-.55 0-1-.45-1-1V7h14v13z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>Shopping</p>
          </div>
        </li>
      </Link>
      <Link to="/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ">
        <li
          className={
            path === "/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
            <svg
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="mr-4"
            >
              <path d="M12 4v9.38c-.73-.84-1.8-1.38-3-1.38-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V8h6V4h-7zM9 19c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm9-12h-5V5h5v2z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>Music</p>
          </div>
        </li>
      </Link>
      <Link to="/feed/storefront?bp=ogUCKAI%3D">
        <li
          className={
            path === "/feed/storefront?bp=ogUCKAI%3D" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="mr-4"
            >
              <path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>Films</p>
          </div>
        </li>
      </Link>
      <Link to="/channel/UC4R8DWoMoI7CAwX8_LjQHig">
        <li
          className={
            path === "/channel/UC4R8DWoMoI7CAwX8_LjQHig" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
            <svg
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="mr-4"
            >
              <path d="m22.01 4.91-.5-2.96L1.64 5.19 2 8v13h20V8H3.06l18.95-3.09zM5 9l1 3h3L8 9h2l1 3h3l-1-3h2l1 3h3l-1-3h3v11H3V9h2z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>Live</p>
          </div>
        </li>
      </Link>
      <Link to="/gaming">
        <li
          className={
            path === "/gaming" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
            <svg
              className="mr-4"
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path d="M10 12H8v2H6v-2H4v-2h2V8h2v2h2v2zm7 .5c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm3-3c0-.83-.67-1.5-1.5-1.5S17 8.67 17 9.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5zm-3.03-4.35-4.5 2.53-.49.27-.49-.27-4.5-2.53L3 7.39v6.43l8.98 5.04 8.98-5.04V7.39l-3.99-2.24m0-1.15 4.99 2.8v7.6L11.98 20 2 14.4V6.8L6.99 4l4.99 2.8L16.97 4z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>Gaming</p>
          </div>
        </li>
      </Link>
      <Link to="/channel/UCYfdidRxbB8Qhf0Nx7ioOYw">
        <li
          className={
            path === "/channel/UCYfdidRxbB8Qhf0Nx7ioOYw" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
            <svg
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="mr-4"
            >
              <path d="M11 11v6H7v-6h4m1-1H6v8h6v-8zM3 3.03V21h14l4-4V3.03M20 4v11.99l-.01.01H16v3.99l-.01.01H4V4h16zm-2 4H6V6h12v2zm0 7h-5v-2h5v2zm0-3h-5v-2h5v2z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>News</p>
          </div>
        </li>
      </Link>
      <Link to="/channel/UCEgdi0XIXXZ-qJOFPf4JSKw">
        <li
          className={
            path === "/channel/UCEgdi0XIXXZ-qJOFPf4JSKw" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
            <svg
              className="mr-4"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path d="M18 5V2H6v3H3v6l3.23 1.61c.7 2.5 2.97 4.34 5.69 4.38L8 19v3h8v-3l-3.92-2.01c2.72-.04 4.99-1.88 5.69-4.38L21 11V5h-3zM6 11.38l-2-1V6h2v5.38zM15 21H9v-1.39l3-1.54 3 1.54V21zm2-10c0 2.76-2.24 5-5 5s-5-2.24-5-5V3h10v8zm3-.62-2 1V6h2v4.38z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>Sport</p>
          </div>
        </li>
      </Link>
      <Link to="/channel/UCtFRv9O2AHqOZjjynzrv-xg">
        <li
          className={
            path === "/channel/UCtFRv9O2AHqOZjjynzrv-xg" ? "bg-zinc-800 rounded-xl" : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8  py-2 flex fill-current">
            <svg
              enableBackground="new 0 0 24 24"
              height="24"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
              className="mr-4"
            >
              <path d="M16 21h-2.28c-.35.6-.98 1-1.72 1s-1.38-.4-1.72-1H8v-1h8v1zm4-11c0 2.96-1.61 5.54-4 6.92V19H8v-2.08C5.61 15.54 4 12.96 4 10c0-4.42 3.58-8 8-8s8 3.58 8 8zm-5 8v-1.66l.5-.29C17.66 14.8 19 12.48 19 10c0-3.86-3.14-7-7-7s-7 3.14-7 7c0 2.48 1.34 4.8 3.5 6.06l.5.28V18h6z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>Learning</p>
          </div>
        </li>
      </Link>
      <Link to="/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ">
        <li
          className={
            path === "/channel/UCrpQ4p1Ql_hG8rKXIKM1MOQ"
              ? "bg-zinc-800 rounded-xl"
              : "rounded-xl"
          }
        >
          <div className="hover:bg-zinc-800 text-white hover:cursor-pointer hover:rounded-xl px-3 pr-8 py-2 flex fill-current">
            <svg
              height="24"
              className="mr-4"
              viewBox="0 0 24 24"
              width="24"
              focusable="false"
            >
              <path d="M12.5 6.44v-.5C13.36 5.71 14 4.93 14 4c0-1.1-.9-2-2-2s-2 .9-2 2h1c0-.55.45-1 1-1s1 .45 1 1-.45 1-1 1h-.5v1.44L4 13h2v6h1v2h1v-2h2v3h1v-3h2v2h1v-2h1v-3h3v-3h2l-7.5-6.56zM6.66 12 12 7.33 17.34 12H6.66zM14 18H7v-5h7v5zm1-3v-2h2v2h-2z"></path>
            </svg>
            <p onClick={(e) => handleClick(e.target.innerHTML)}>
              Fashion & beauty
            </p>
          </div>
        </li>
      </Link>
    </ul>
  );
};

export default Sidebar;
