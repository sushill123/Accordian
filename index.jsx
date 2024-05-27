import "./styles.css";
import dataItem from "./data.js";
import { useState } from "react";



// 1. Accordian for single selection


const Accordian = () => {
  const [selected, setSelected] = useState(null);

  const handleSingleSelection = (getcurrentid) => {
    setSelected(getcurrentid === selected ? null : getcurrentid)
  };

  return (
    <div className="wrapper">
      {dataItem && dataItem.length > 0
        ? dataItem.map((item) => (
          <div key={item.id} className="items">
            <div className="title_heading">
              <h1 onClick={() => handleSingleSelection(item.id)}>{item.title}</h1>
            
            </div>
            {selected === item.id ? (
              <div className="answer">
                <p>{item.answer}</p>
              </div>
            ) : null}
          </div>
        ))
        : "No data Found"}
    </div>
  );
};

export default Accordian;