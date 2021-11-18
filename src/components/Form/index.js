import { useState, useEffect } from "react";
import "./index.css";

const Form = ({ onSubmit }) => {
  const [value, setValue] = useState(localStorage.getItem("value") || "");

  useEffect(() => {
    window.localStorage.setItem("value", value);
  }, [value]);

  const takeValue = (event) => {
    setValue(event.target.value);
  };
  const pressEnter = (e) => {
    if (e.key === "Enter" && value) {
      onSubmit(value);
      setValue("");
    }
  };

  return (
    <input
      className="input"
      value={value}
      onChange={takeValue}
      onKeyPress={pressEnter}
      placeholder="Enter your ToDos"
    />
  );
};

export default Form;
