import { useContext } from "react";
import TodoItem from "./TodoItem"
import styles from "./TodoItems.module.css";
import { TodoItemContext } from "../store/todo-items-store";

const TodoItems = ({ handelDeleteItem}) => {
   
    const TodoItems = useContext(TodoItemContext);

    return (
            <div className={`${styles.itemsContainer} items-container`} >
                {TodoItems.map((item)=>
                   <TodoItem key={item.name} handelDeleteItem={handelDeleteItem} todoDate={item.date} todoName={item.name} item={item}/>
                )}
            </div>
    );
}

export default TodoItems;