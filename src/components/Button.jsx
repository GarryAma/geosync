import { useCities } from "../contexts/CitiesContext";

const Button = ({ children, type, onClick }) => {
  const primary = `hover:outline hover:outline-1 hover:outline-green-300`;
  const secondary = "hover:outline hover:outline-1 hover:outline-red-300";

  const buttonType = type === "primary" ? primary : secondary;

  const { isLoading } = useCities();

  return (
    <button
      className={`p-2 bg-transparent ${buttonType} rounded-md outline outline-1 outline-stone-500 duration-300 ${
        isLoading ? "cursor-not-allowed" : "pointer"
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
