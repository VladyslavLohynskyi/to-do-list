import ToDo from "../ToDo/index";
import "./index.css";

const ToDos = ({ buttonValue, toDoList, deleteToDo, takeChekedProp }) => {
  const defaultTodo = (toDo) => (
    <ToDo
      buttonChecked={buttonValue.buttonChecked}
      key={toDo.id}
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
    <>
      <div className="outputToDos">{outputToDos()}</div>
    </>
  );
};

export default ToDos;
