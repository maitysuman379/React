import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ TodoItems }) => {
    return (
        <>
            <div className={`${styles.itemsContainer} items-container`} >
                {TodoItems.map((item)=>
                   <TodoItem todoDate={item.date} todoName={item.name}/>
                )}
            </div>
        </>
    );
}

export default TodoItems;