import './App.css';
import React, { useState } from "react"
import Mytodolist from './Mytodolist';

function App() {
  const [inputList, setInputList] = useState("");
  const [items, setItems] = useState([]);

  const item = (event) => {
    setInputList(event.target.value);
  };
  const listOfitem = () => {
    setItems((xitems) => {
      return [...xitems, inputList]
    })
    setInputList("")
  }
  const deleteItems = (id) => {
    console.log("delete")
    setItems((oldItems) => {
      return oldItems.filter((arrEle, index) => {
        return index !== id;
      })
    })
  }
  return (
    <div className="main_div">
      <div className="center_div">
        <br />
        <h1>My ToDo List</h1>
        <br />
        <input type="text" placeholder="Title..."
          value={inputList} onChange={item} />
        <button onClick={listOfitem}>Add</button>
        <ol>
          {items.map((itemvalue, index) => {
            return (
              <Mytodolist key={index} id={index}
                text={itemvalue} onSelect={deleteItems}
              />
            )
          })}
        </ol>
      </div>
    </div>
  );
}

export default App;
