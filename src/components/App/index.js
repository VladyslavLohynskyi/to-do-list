import { useState, useEffect } from "react";

import Form from "../Form/index";
import ToDos from "../ToDos/index";
import CheckAllButton from "../CheckAllButton/index";
import ClearCheckedButton from "../ClearCheckedButton/index";
import CountUnCheckedToDos from "../CountUnCheckedToDos";
import FilterButtons from "../FilterButtons";

import "./index.css";

const App = () => {
  const [toDoList, setToDoList] = useState([]);
  const [buttonValue, setButtonValue] = useState({
    buttonChecked: false,
    buttonUnChecked: false,
  });
  const onClickCheked = () => {
    setButtonValue({
      buttonChecked: true,
      buttonUnChecked: false,
    });
  };

  const onClickUnCheked = () => {
    setButtonValue({
      buttonChecked: false,
      buttonUnChecked: true,
    });
  };

  const onClickAll = () => {
    setButtonValue({
      buttonChecked: false,
      buttonUnChecked: false,
    });
  };

  useEffect(() => {
    getLocalStorage();
  }, []);

  useEffect(() => {
    savelocalStorage();
  });

  const savelocalStorage = () => {
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
  };
  const getLocalStorage = () => {
    if (localStorage.getItem("toDoList") === null) {
      localStorage.setItem("toDoList", JSON.stringify([]));
    } else {
      let todoLocal = JSON.parse(localStorage.getItem("toDoList"));
      setToDoList(todoLocal);
    }
  };
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
    <div className="app">
      <div className="form">
        <CheckAllButton changeToDoList={changeToDoList} toDoList={toDoList} />
        <Form onSubmit={onSubmit} />
      </div>
      <ToDos
        toDoList={toDoList}
        deleteToDo={deleteToDo}
        takeChekedProp={takeChekedProp}
        buttonValue={buttonValue}
      />

      <div className="footer">
        <FilterButtons
          className="buttonsFilterPosition "
          onClickCheked={onClickCheked}
          onClickUnCheked={onClickUnCheked}
          onClickAll={onClickAll}
          toDoList={toDoList}
        />

        <CountUnCheckedToDos toDoList={toDoList} />
        <ClearCheckedButton
          toDoList={toDoList}
          changeToDoList={changeToDoList}
        />
      </div>
    </div>
  );
};

export default App;
