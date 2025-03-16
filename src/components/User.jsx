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
    <div className="w-[20%] absolute top-4 right-4 bg-stone-700 rounded-md z-[999]">
      <div className="py-1 flex justify-evenly items-center text-sm text-white">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-[30px] h-[30px] rounded-full"
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
