import TodoItem from "./TodoItem"

const TodoItems = ({addItem , onDeleteClick})=>{
 
  return(
   
    <>
    {
      addItem.map(( data )=>(
        
        <TodoItem key={data.id} todoName={data.name} todoDate={data.dueDate} onDeleteClicking={onDeleteClick}  />
      )
    )} 
      
  
  
   
    </>
  )

}
export default TodoItems

