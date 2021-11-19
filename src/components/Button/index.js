import "./index.css";

const Button = ({ onClick, className, name }) => {
  return (
    <button onClick={onClick} className={`btn ${className}`}>
      {name}
    </button>
  );
};
export default Button;
