import styles from './FoodInput.module.css'

const FoodInput = ({handleOnChange}) =>{
    return (
        <>
          <input type="text" placeholder="Ex-Rice" onChange={handleOnChange} className={`${styles.inputCss} form-control`} />
        </>
    );
}

export default FoodInput;