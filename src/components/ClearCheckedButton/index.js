import "./index.css";

const ClearCheckedButton = ({ toDoList, deleteToDo }) => {
  const changeClassName = () => {
    if (toDoList.some((el) => el.checked === false)) {
      return "";
    } else return "buttonClearDisplay";
  };

  const findIndexToDelete = () => {
    toDoList.forEach((element) => {
      if (element.checked === false) {
        const index = toDoList.indexOf(element);
        deleteToDo(index);
      }
    });
  };
  return (
    <button className={changeClassName()} onClick={findIndexToDelete}>
      Clear checked
    </button>
  );
};
export default ClearCheckedButton;
