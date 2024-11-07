import React from "react";

function InputArea({ inputText, onInputChange, onAddItem }) {
  return (
    <div className="form">
      <input
        type="text"
        value={inputText}
        onChange={onInputChange}
        placeholder="Enter a task"
      />
      <button onClick={onAddItem}>
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
