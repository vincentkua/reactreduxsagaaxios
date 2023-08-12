import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSagaTodo, deleteSagaTodo, getSagaTodo } from "../redux/action";

const Main = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state=>state.todoReducer)
    const [newTodo, setNewTodo] = useState("")
    const handleSubmit = () => {
        dispatch(addSagaTodo(newTodo))
    }
    const handleDelete = (x) => {
        dispatch(deleteSagaTodo(x))
    }

    useEffect(()=>{
        dispatch(getSagaTodo())
    },[dispatch])

    return ( 
    <div style={{padding: "0 10px"}}>
        <h3>Todos</h3>

        <input type="text" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)}/> <button onClick={()=>handleSubmit()}>Add New</button>
        <ul>
            {todos.map(x=>(
                <li key={x.id}>{x.item}  <button onClick={()=>handleDelete(x.id)}>Delete</button></li>
            ))}
        </ul>
    </div>
     );
}
 
export default Main;