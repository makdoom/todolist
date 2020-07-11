import React, { useState } from "react";
import "./todo.css";

const Todo = () => {
  const [inputText, setInputText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleInput = (e) => {
    setInputText(e.target.value);
  };

  // To Add Item into the list
  const addItem = () => {
    setTaskList([...taskList, inputText]);
    setInputText("");
    console.log(taskList);
  };

  return (
    <div>
      <div className="todo">
        <h2>
          Todo <span>List</span> App
        </h2>
        <div className="input-field">
          <input
            value={inputText}
            type="text"
            placeholder="Add Task"
            onChange={handleInput}
          />
          <button onClick={addItem} className="add-btn">
            Add
          </button>
        </div>
        <div className="list-items">
          {taskList.map((task, index) => (
            <li className="item" key={index}>
              {task}
              <i className="delete-btn fas fa-trash-alt"></i>
            </li>
          ))}
        </div>
        <button className="clear-btn">clear Tasks</button>
      </div>
    </div>
  );
};

export default Todo;
