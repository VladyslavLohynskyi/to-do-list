import { useState, useEffect } from "react";
import "./index.css";

const CountUnCheckedToDos = ({ toDoList }) => {
  const [countUnCheckedToDos, setCountUnCheckedToDos] = useState(0);
  useEffect(() => {
    let counter = 0;
    toDoList.forEach((element) => {
      if (element.checked) {
        counter++;
      }
    });
    setCountUnCheckedToDos(counter);
  }, [toDoList]);
  const className = () => {
    if (!countUnCheckedToDos) {
      return "displayNone";
    }
  };
  return <p className={className()}>{countUnCheckedToDos} items left</p>;
};

export default CountUnCheckedToDos;
