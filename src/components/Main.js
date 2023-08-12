import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "../redux/action";

const Main = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state=>state.todoReducer)
    const [newTodo, setNewTodo] = useState("")
    const handleSubmit = () => {
        dispatch(addTodo(newTodo))
    }
    const handleDelete = (x) => {
        dispatch(deleteTodo(x))
    }

    return ( 
    <div style={{padding: "0 10px"}}>
        <h3>Todos</h3>

        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/> <button onClick={()=>handleSubmit()}>Add New</button>
        <ul>
            {todos.map(x=>(
                <li key={x}>{x}  <button onClick={()=>handleDelete(x)}>Delete</button></li>
            ))}
        </ul>
    </div>
     );
}
 
export default Main;