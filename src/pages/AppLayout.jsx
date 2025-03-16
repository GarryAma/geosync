import { useNavigate } from "react-router-dom";
import Map from "../components/map";
import Sidebar from "../components/Sidebar";
import User from "../components/User";
import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";

const AppLayout = () => {
  const navigate = useNavigate();

  const { isAuthenticated } = useAuth();
  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/");
    }
  }, [navigate, isAuthenticated]);

  return (
    <div className="flex flex-col md:flex-row bg-slate-950 m-1 h-[100vh] relative">
      <Sidebar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
