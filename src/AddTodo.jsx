import React, { useRef, useState } from 'react'
import "./App.css"

const AddTodo = ({onNewItem}) => {  

  const todoNameElement = useRef()
  const todoDateElement = useRef()

  const [todoName, setodoName] = useState()
  const [dueDate, settodoDate] = useState()
  

  const handelNameChange = (event) =>{
   
    setodoName(event.target.value);

  }


  const handelDateChange = (event) =>{
    settodoDate(event.target.value);
   

  }

  const handelSubmit = () =>{
    onNewItem(todoName, dueDate)
    // const todoname = todoNameElement.current.value;
    // const duedate = todoNameElement.current.value;
    // onNewItem(todoname, duedate)
    // This code is for use ref -------------------


    setodoName("")
    settodoDate("")
  }




  
  return (
    <div>

<div className="row first-cont ">
        <div className="col-md-4">
          <input type="text" placeholder="Enter Todo Here"
          ref={todoNameElement}
          value={todoName}
           onChange={handelNameChange} />
        </div>
        <div className="col-md-4">
          <input type="date" name="" id=""
          ref={todoDateElement}
          value={dueDate}
           onChange={handelDateChange} />
        </div>
        <div className="col-md-2">
        <button type="button" className="btn btn-success" onClick={handelSubmit} >Add</button>
        </div>
      </div>
      
    </div>
  )
}

export default AddTodo
