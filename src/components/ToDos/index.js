import { useState } from "react";
import ToDo from "../ToDo/index";

import FilterButtons from "../FilterButtons";

const ToDos = ({ toDoList, deleteToDo, takeChekedProp }) => {
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

  function* createGenerator(start) {
    while (true) yield start++;
  }
  const generetor = createGenerator(1);
  const defaultTodo = (toDo) => (
    <ToDo
      buttonChecked={buttonValue.buttonChecked}
      key={generetor.next().value}
      toDo={toDo}
      index={toDoList.indexOf(toDo)}
      deleteToDo={deleteToDo}
      takeChekedProp={takeChekedProp}
    />
  );

  const outputWithoutFilter = () => {
    return toDoList.map((toDo) => defaultTodo(toDo));
  };
  const outputWithFilterUnChecked = () => {
    return toDoList
      .filter((toDo) => toDo.checked)
      .map((toDo) => defaultTodo(toDo));
  };

  const outputWithFilterChecked = () => {
    return toDoList
      .filter((toDo) => !toDo.checked)
      .map((toDo) => defaultTodo(toDo));
  };

  const outputToDos = () => {
    if (buttonValue.buttonChecked) {
      return outputWithFilterChecked();
    }
    if (buttonValue.buttonUnChecked) {
      return outputWithFilterUnChecked();
    } else {
      return outputWithoutFilter();
    }
  };

  return (
    <div>
      {outputToDos()}
      <FilterButtons
        onClickCheked={onClickCheked}
        onClickUnCheked={onClickUnCheked}
        onClickAll={onClickAll}
        toDoList={toDoList}
      />
    </div>
  );
};

export default ToDos;
