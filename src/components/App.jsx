import React, { useState } from "react";
import InputArea from "./InputArea";
import TodoItem from "./ToDoItem";
import TodoList from "./ToDoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  // Handle input change
  function handleInputChange(event) {
    setInputText(event.target.value);
  }

  // Handle adding new item to the list
  function addItem() {
    if (inputText.trim() !== "") {
      setItems((prevItems) => [
        ...prevItems,
        { text: inputText, completed: false },
      ]);
      setInputText(""); // Clear input after adding
    }
  }

  // Handle toggle complete state
  function toggleComplete(index) {
    setItems((prevItems) =>
      prevItems.map((item, i) =>
        i === index ? { ...item, completed: !item.completed } : item
      )
    );
  }

  // Handle removing item
  function removeItem(index) {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea
        inputText={inputText}
        onInputChange={handleInputChange}
        onAddItem={addItem}
      />
      <TodoList
        items={items}
        onToggleComplete={toggleComplete}
        onRemoveItem={removeItem}
      />
    </div>
  );
}

export default App;
