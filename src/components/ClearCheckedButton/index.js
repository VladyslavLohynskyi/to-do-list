import "./index.css";
import Button from "../Button";

const ClearCheckedButton = ({ toDoList, changeToDoList }) => {
  const changeClassName = () => {
    if (!toDoList.some((el) => !el.checked)) {
      return "buttonClearDisplay";
    }
  };

  const findIndexToDelete = () => {
    const ClearCheckedToDos = [];
    toDoList.forEach((element) => {
      if (element.checked) {
        ClearCheckedToDos.push(element);
      }
    });
    changeToDoList(ClearCheckedToDos);
  };
  return (
    <Button
      className={changeClassName()}
      onClick={findIndexToDelete}
      name="Clear checked"
    />
  );
};
export default ClearCheckedButton;
