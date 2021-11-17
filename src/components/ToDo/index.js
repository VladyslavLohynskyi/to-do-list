import { useState } from "react";

const ToDo = ({ deleteToDo, index, takeChekedProp, toDo }) => {
  const [checked, setChecked] = useState(false);

  const changeCheked = () => {
    if (checked) {
      setChecked(false);
    } else {
      setChecked(true);
    }
    takeChekedProp(checked, index, toDo.value);
  };

  return (
    <div>
      <p>
        <input
          type="checkBox"
          onChange={changeCheked}
          checked={!toDo.checked}
        />
        {toDo.value + " "}
        <button
          onClick={() => {
            deleteToDo(index);
          }}
        >
          Delete
        </button>
      </p>
    </div>
  );
};

export default ToDo;
