import styles from './FoodInput.module.css'

const FoodInput = ({handleOnKeyDown}) =>{
    return (
        <>
          <input type="text" placeholder="Ex-Rice" onKeyDown={handleOnKeyDown} className={`${styles.inputCss} form-control`}/>
        </>
    );
}

export default FoodInput;