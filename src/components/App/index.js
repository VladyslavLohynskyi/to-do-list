import { useState, useEffect } from "react";
import Form from "../Form/index";
import ToDos from "../ToDos/index";
import CheckAllButton from "../CheckAllButton/index";
import ClearCheckedButton from "../ClearCheckedButton/index";

import "./index.css";

const App = () => {
  const [toDoList, setToDoList] = useState(() => {
    return JSON.parse(window.localStorage.getItem("toDolist")) || [];
  });

  useEffect(() => {
    window.localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const deleteToDo = (index) => {
    if (toDoList === 1) {
      setToDoList([]);
    } else {
      const clearArr = toDoList
        .slice(0, index)
        .concat(toDoList.slice(index + 1));

      setToDoList([...clearArr]);
    }
  };
  const onSubmit = (value) => {
    setToDoList([{ value, checked: true }, ...toDoList]);
  };

  const takeChekedProp = (checked, index, value) => {
    const checkedArr = toDoList
      .slice(0, index)
      .concat({ value, checked }, toDoList.slice(index + 1));
    setToDoList(checkedArr);
  };

  const checkedAll = (arr) => {
    setToDoList(arr);
  };

  return (
    <>
      <CheckAllButton checkedAll={checkedAll} toDoList={toDoList} />

      <Form onSubmit={onSubmit} />
      <ToDos
        toDoList={toDoList}
        deleteToDo={deleteToDo}
        takeChekedProp={takeChekedProp}
      />
      <ClearCheckedButton toDoList={toDoList} deleteToDo={deleteToDo} />
    </>
  );
};

export default App;
