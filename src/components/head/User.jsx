import { FaUserCircle } from "react-icons/fa";
const User = ({ url }) => {
  return (
    <div className="mx-2 py-1">
      {url && (
        <div className="w-10 h-10 mr-2 mt-1">
          <img className="rounded-full" src={url} alt="" />
        </div>
      )}
      {!url && <FaUserCircle className="text-zinc-400 lg:text-2xl text-2xl" />}
    </div>
  );
};

export default User;
