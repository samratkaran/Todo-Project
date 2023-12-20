import React, { useState } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoItems from "./TodoItems";

function App() {
  let time = new Date();

  const intialTodoItem = [];

  const [todoItems, setTodoItems] = useState(intialTodoItem);

  const handelNewItem = (itemName, itemDate) => {
    console.log(`new itemm added: ${itemName} DATE: ${itemDate} `);

    const newTodoItems = [
      ...todoItems,
      { id: Math.random(), name: itemName, dueDate: itemDate },
    ];

    setTodoItems(newTodoItems);
  };

  const handelDeleteItem = (todoItemName) => {
    const newTodoItemDelete = todoItems.filter(
      (item) => item.name !== todoItemName
    );
    setTodoItems(newTodoItemDelete);

    console.log(`to do item deleted ${todoItemName}`);
  };

  return (
    <div className="App">
      <center className="todo-container">
        <h1>Todo App</h1>
        <div className="container text-center mt-5">
          <AddTodo onNewItem={handelNewItem} />

          {todoItems.length === 0 && "sorry no content"}

          <TodoItems addItem={todoItems} onDeleteClick={handelDeleteItem} />

          {/* -------------------------------------------- */}
          <h2 className="mt-5">this is the {time.toLocaleTimeString()}</h2>
        </div>
      </center>
    </div>
  );
}

export default App;
