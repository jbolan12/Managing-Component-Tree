import React from "react";
import TodoItem from "./ToDoItem";

function ToDoList({ items, onToggleComplete, onRemoveItem }) {
  return (
    <ul>
      {items.map((item, index) => (
        <TodoItem
          key={index}
          item={item}
          index={index}
          onToggleComplete={onToggleComplete}
          onRemoveItem={onRemoveItem}
        />
      ))}
    </ul>
  );
}

export default ToDoList;
