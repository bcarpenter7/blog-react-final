import React, { useState } from "react";

function Todo() {
  const [items, setItems] = useState([]);
  const [text, setText] = useState("");

  const handleChange = (event) => setText(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!text) return;

    setItems([...items, { text, completed: false }]);
    setText("");
  };

  const handleComplete = (index) => {
    const newItems = [...items];
    newItems[index].completed = !newItems[index].completed;
    setItems(newItems);
  };

  const handleDelete = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Add New Todo<input type="text" value={text} onChange={handleChange} /></label>
        <button type="submit">Add</button>
      </form>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span style={{ textDecoration: item.completed ? "line-through" : "none" }}>{item.text}</span>
            <button onClick={() => handleComplete(index)}>Complete</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;

