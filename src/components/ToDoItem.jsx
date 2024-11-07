import React from "react";

function ToDoItem({ item, index, onToggleComplete, onRemoveItem }) {
  return (
    <li>
      <span
        onClick={() => onToggleComplete(index)}
        style={{
          textDecoration: item.completed ? "line-through" : "none",
          cursor: "pointer",
        }}
      >
        {item.text}
      </span>
      <button onClick={() => onRemoveItem(index)}>Delete</button>
    </li>
  );
}

export default ToDoItem;
