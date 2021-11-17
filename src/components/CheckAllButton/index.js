const CheckAllButton = ({ checkedAll, toDoList }) => {
  return (
    <button
      onClick={() =>
        checkedAll(
          toDoList.map((toDo) => (toDo = { checked: false, value: toDo.value }))
        )
      }
    >
      CheckAllButton
    </button>
  );
};

export default CheckAllButton;
