import { useState, useEffect } from "react";

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

  return <p>{countUnCheckedToDos} items left</p>;
};

export default CountUnCheckedToDos;
