import { useContext } from "react";
import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
import { TodoItemContext } from "../store/todo-items-store";

const TodoItems = ({ handelDeleteItem}) => {

    const TodoItems = useContext(TodoItemContext);

    return (
            <div className={`${styles.itemsContainer} items-container`} >
                {TodoItems.map((item)=>
                   <TodoItem handelDeleteItem={handelDeleteItem} key={item.name} todoDate={item.date} item={item} todoName={item.name}/>
                )}
            </div>
    );
}

export default TodoItems;