import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemContext } from "../store/todo-items-store";

const TodoItems = () => {
   
    const contextObj = useContext(TodoItemContext);
    const TodoItems = contextObj.TodoItem;

    return (
            <div className={`${styles.itemsContainer} items-container`} >
                {TodoItems.map((item)=>
                   <TodoItem key={item.name} todoDate={item.date} todoName={item.name} item={item}/>
                )}
            </div>
    );
}

export default TodoItems;