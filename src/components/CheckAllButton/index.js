import Button from "../Button";
import "./index.css";

const CheckAllButton = ({ changeToDoList, toDoList }) => {
  const className = () => {
    if (!toDoList.length) return "displayNone";
  };
  return (
    <Button
      className={className()}
      name="CheckAllButton"
      onClick={() =>
        changeToDoList(
          toDoList.map((toDo) => (toDo = { checked: false, value: toDo.value }))
        )
      }
    />
  );
};

export default CheckAllButton;
