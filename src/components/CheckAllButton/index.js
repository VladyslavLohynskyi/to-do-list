import Button from "../Button";

const CheckAllButton = ({ changeToDoList, toDoList }) => {
  return (
    <Button
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
