const ErrorMessage = ({foodItems}) => {

    return <>
        {foodItems.length === 0 && <h3>i am still hungry</h3>}
    </>
}

export default ErrorMessage;