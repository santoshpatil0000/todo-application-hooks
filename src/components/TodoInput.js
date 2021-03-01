import React from "react";

function TodoInput() {
  return (
    <div className="input-container">
      <form className="form-container">
        <div className="book-input">
          <i className="fas fa-book book-icon"></i>
          <input
            className="input-entry"
            type="text"
            placeholder="add todo item"
            value=""
            onChange=""
          ></input>
        </div>
      </form>
      <button className="add-btn" type="submit">
        add items
      </button>
    </div>
  );
}

export default TodoInput;
