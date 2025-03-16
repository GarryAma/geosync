import { useState, useEffect } from "react";
import PageNav from "../components/PageNav";
// import { Link } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("garryamasia@outlook.com");
  const [password, setPassword] = useState("garry123");

  console.log("login runs");

  const navigate = useNavigate();

  const { login, isAuthenticated, error } = useAuth();
  console.log(error);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (email && password) {
      login(email, password);
    }
  };

  useEffect(() => {
    console.log("effect from login");
    if (isAuthenticated) {
      navigate("/app", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  return (
    <main className="bg-slate-950 m-1 h-[100vh]">
      <PageNav />

      <div className="text-white w-[90%] max-w-2xl bg-slate-900 mx-auto mt-44 rounded-lg outline outline-white outline-1  px-8 py-12 text-xs shadow-md shadow-white">
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="email">Email address : </label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="bg-transparent outline outline-1 outline-white px-4 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className="bg-transparent outline outline-1 outline-white px-4 py-2 rounded-md"
            />
          </div>

          <Button className="inline-block text-xs hover:text-yellow-300 hover:border-blue-400 transition-all duration-300 border py-1 px-2 rounded-md">
            Login
          </Button>
          {error && <p className="text-xs text-red-500">{error}</p>}
        </form>
      </div>
    </main>
  );
};

export default Login;
