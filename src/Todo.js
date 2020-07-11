import React from "react";
import "./todo.css";

const Todo = () => {
  const handleInput = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      <div className="todo">
        <h2>
          Todo <span>List</span> App
        </h2>
        <div className="input-field">
          <input type="text" placeholder="Add Task" onChange={handleInput} />
          <a href="#" className="add-btn">
            Add
          </a>
        </div>
        <div className="list-items">
          <li className="item">Reading Books </li>
          <li className="item">Reading Books</li>
          <li className="item">Reading Books</li>
        </div>
      </div>
    </div>
  );
};

export default Todo;
