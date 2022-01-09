import { useState } from "react";
import Button from "../Button";
import "./index.css";

const ToDo = ({ deleteToDo, index, takeChekedProp, toDo }) => {
  const [checked, setChecked] = useState(false);

  const changeCheked = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
    takeChekedProp(checked, index, toDo);
  };

  return (
    <div className="outputToDo">
      <div>
        <input
          style={{ cursor: "pointer" }}
          type="checkBox"
          onChange={changeCheked}
          checked={!toDo.checked}
        />
        <p className="toDoValue">{toDo.value + " "}</p>
      </div>
      <Button
        onClick={() => {
          deleteToDo(index);
        }}
        name="Delete"
      />
    </div>
  );
};

export default ToDo;
