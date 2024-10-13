import { useContext } from 'react';
import styles from './WelcomeMessage.module.css';
import { TodoItemContext } from '../store/todo-items-store';

const WelcomeMessage = () =>{

    const ContextObj = useContext(TodoItemContext);
    const TodoItem = ContextObj.TodoItem;

    return (
        <>
        {TodoItem.length === 0 && <h2 className={`${styles.h2Css}`}>Enjoy Your Day You Complete all the task</h2>}
        </>
    );
}

export default WelcomeMessage;