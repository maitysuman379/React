import styles from './WelcomeMessage.module.css';

const WelcomeMessage = ({TodoItem}) =>{
    return (
        <>
        {TodoItem.length === 0 && <h2 className={`${styles.h2Css}`}>Enjoy Your Day You Complete all the task</h2>}
        </>
    );
}

export default WelcomeMessage;