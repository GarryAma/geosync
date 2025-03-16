import { createContext, useContext, useReducer } from "react";

const AuthContext = createContext();

const initialState = {
  user: null,
  isAuthenticated: false,
  error: "",
};

const FAKE_DATA = {
  name: "Garry",
  email: "garryamasia@outlook.com",
  password: "garry123",
  avatar: "https://i.pravatar.cc/50?u=zz",
};

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload, isAuthenticated: true };

    case "LOGOUT":
      return { ...state, user: null, isAuthenticated: false };

    case "ERROR":
      return { ...state, error: action.payload };

    default:
      throw new Error("none of the cases");
  }
};

const AuthProvider = ({ children }) => {
  const [{ user, isAuthenticated, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const login = (email, password) => {
    if (email === FAKE_DATA.email && password === FAKE_DATA.password) {
      dispatch({ type: "LOGIN", payload: FAKE_DATA });
    } else {
      dispatch({
        type: "ERROR",
        payload:
          "Sorry, at the moment we are only using a fake API for authentication. Please use the following credentials for testing: Email - garryamasia@outlook.com, Password - garry123.",
      });
    }
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <AuthContext.Provider
      value={{ user, isAuthenticated, login, logout, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("AuthContext was used outside AuthProvider");
  return context;
};

export { AuthProvider, useAuth };
