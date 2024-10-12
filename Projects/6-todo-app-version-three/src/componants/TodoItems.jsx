import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";

const TodoItems = ({ TodoItems, handelDeleteItem}) => {
    return (
        <>
            <div className={`${styles.itemsContainer} items-container`} >
                {TodoItems.map((item)=>
                   <TodoItem handelDeleteItem={handelDeleteItem} key={item.name} todoDate={item.date} item={item} todoName={item.name}/>
                )}
            </div>
        </>
    );
}

export default TodoItems;