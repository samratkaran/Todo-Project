import TodoItem from "./TodoItem"

const TodoItems = ({addItem})=>{
 
  return(
   
    <>
    {
      addItem.map(( data )=>(
        
        <TodoItem key={data.id} todoName={data.name} todoDate={data.dueDate}/>
      )
    )} 
      
  
  
   
    </>
  )

}
export default TodoItems

