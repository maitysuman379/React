const WelcomeMessage = ({TodoItems}) =>{
    return (
        <>
        {TodoItems.length <= 0 ? <h2>Enjoy Your Day You Complete all the task</h2> : null}
        </>
    );
}

export default WelcomeMessage;