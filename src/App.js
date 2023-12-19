import React, { useState } from "react";
import "./App.css";
import AddTodo from "./AddTodo";
import TodoItems from "./ItemContaineer";



function App() {
  let time  = new Date();



  const intialTodoItem = [
   
    {id:"2",
      name: "Go to College",
      dueDate: "08/02/2022",
    },
    {id:"3",
    name: "Go to work",
    dueDate: "08/02/2022",
  },

  {id:"4",
    name: "Go to park",
    dueDate: "08/02/2022",
  },
  ];





  const [todoItems , setTodoItems] = useState(intialTodoItem)

  const handelNewItem = (itemName , itemDate) =>{
    console.log(`new itemm added: ${itemName} DATE: ${itemDate}`)

    const newTodoItems=[...todoItems ,{id:"1",
    name: itemName,
    dueDate: itemDate,
  }]

  setTodoItems(newTodoItems);

  };





  return (
    <div className="App">

    <center className="todo-container" >

      <h1>Todo App</h1>
      <div className="container text-center mt-5">
    <AddTodo onNewItem ={handelNewItem}  />
  
    <TodoItems addItem={todoItems} />






{/* -------------------------------------------- */}
   <h2 className="mt-5">this is the {time.toLocaleTimeString()}</h2>
    
      </div>


    </center>


    </div>
  );
}

export default App;
