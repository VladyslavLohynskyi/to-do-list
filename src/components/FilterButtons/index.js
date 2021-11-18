import Button from "../Button";

const FilterButtons = ({ onClickAll, onClickUnCheked, onClickCheked }) => {
  return (
    <div>
      <Button onClick={onClickCheked} name="checked" />
      <Button onClick={onClickUnCheked} name="unchecked" />
      <Button onClick={onClickAll} name="all" />
    </div>
  );
};

export default FilterButtons;
