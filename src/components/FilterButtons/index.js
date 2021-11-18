import Button from "../Button";
import "./index.css";

const FilterButtons = ({
  onClickAll,
  onClickUnCheked,
  onClickCheked,
  toDoList,
}) => {
  const className = () => {
    if (!toDoList.length) return "displayNone";
  };
  return (
    <div className={className()}>
      <Button onClick={onClickCheked} name="checked" />
      <Button onClick={onClickUnCheked} name="unchecked" />
      <Button onClick={onClickAll} name="all" />
    </div>
  );
};

export default FilterButtons;
