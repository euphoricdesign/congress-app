import React, {useContext} from "react";
import { myContext } from "../../context/myContext";
import "./Button.scss";

const Buttons = () => {
  const {advancedSearchActive, onHandleCheck} =useContext(myContext)

  return (
    <>
      <label>
        <input 
          type="checkbox" 
          checked={advancedSearchActive}
          onChange={onHandleCheck}
        />
        <span
          className="check"
        ></span>
      </label>
    </>
  );
};

export default Buttons;
