import { useState, useEffect } from "react";

import Form from "../Form/index";
import ToDos from "../ToDos/index";
import CheckAllButton from "../CheckAllButton/index";
import ClearCheckedButton from "../ClearCheckedButton/index";
import CountUnCheckedToDos from "../CountUnCheckedToDos";

import "./index.css";

const App = () => {
  const [toDoList, setToDoList] = useState(() => {
    return JSON.parse(localStorage.getItem("toDolist") || "[]");
  });

  useEffect(() => {
    window.localStorage.setItem("toDoList", JSON.stringify(toDoList));
  }, [toDoList]);

  const deleteToDo = (index) => {
    const clearArr = toDoList.slice(0, index).concat(toDoList.slice(index + 1));
    setToDoList([...clearArr]);
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

  const changeToDoList = (newToDoList) => {
    setToDoList(newToDoList);
  };

  return (
    <>
      <CheckAllButton changeToDoList={changeToDoList} toDoList={toDoList} />
      <Form onSubmit={onSubmit} />
      <ToDos
        toDoList={toDoList}
        deleteToDo={deleteToDo}
        takeChekedProp={takeChekedProp}
      />
      <CountUnCheckedToDos toDoList={toDoList} />
      <ClearCheckedButton toDoList={toDoList} changeToDoList={changeToDoList} />
    </>
  );
};

export default App;
