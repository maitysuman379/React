import { useContext } from "react";
import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css";
import { TodoItemContext } from "../store/todo-items-store";

const TodoItems = () => {
   
    const TodoItems = useContext(TodoItemContext);

    return (
            <div className={`${styles.itemsContainer} items-container`} >
                {TodoItems.TodoItem.map((item)=>
                   <TodoItem key={item.name} todoDate={item.date} todoName={item.name} item={item}/>
                )}
            </div>
    );
}

export default TodoItems;