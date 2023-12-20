import React from 'react'

const TodoItem = ({todoName,todoDate,onDeleteClicking}) => {

 
  return (
    <div>
      <div className="row first-cont mt-5 ">
        <div className="col-md-4">
          <h4>{todoName}</h4>
        </div>
        <div className="col-md-4">
          <h6>{todoDate}</h6>
        </div>
        <div className="col-md-2">
        <button type="button" className="btn btn-danger" onClick={ ()=> onDeleteClicking(todoName)}>remove</button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
