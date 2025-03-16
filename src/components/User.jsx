import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

const User = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate("/");
  };

  // Cegah error jika `user` adalah `null`
  if (!user) return null;
  return (
    <div className="md:w-[205px] md:h-[40px] w-[25%] text-xs  absolute top-4 right-4 bg-slate-800 rounded-md z-[999]">
      <div className="p-1 flex justify-evenly md:justify-evenly md:items-center text-white md:text-xs text-[8px]">
        <img
          src={user.avatar}
          alt={user.name}
          className="hidden md:block w-[30px] h-[30px] rounded-full"
        />
        <span>Hey, {user.name}</span>
        <button className="bg-red-500 px-2 rounded-md" onClick={handleClick}>
          logout
        </button>
      </div>
    </div>
  );
};

export default User;
