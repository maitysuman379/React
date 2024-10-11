import styles from './FoodInput.module.css'

const FoodInput = () =>{

    const handleOnChange = (event) =>{
        console.log(event.target.value);
    }
    return (
        <>
        <input type="text" placeholder="Ex-Rice" onChange={handleOnChange} className={`${styles.inputCss}`} />
        </>
    );
}

export default FoodInput;