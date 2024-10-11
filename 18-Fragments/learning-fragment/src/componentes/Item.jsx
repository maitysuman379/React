import styles from "./Item.module.css";
 
const Item = ({items, handelClick}) =>{

    return (
        <>
          <li className={`${styles.licss} list-group-item `}>
            <span className={`${styles.spancss}`}>{items}</span>
            <button className={`${styles.buttonCss} btn btn-info`} onClick={handelClick} >buy</button>
          </li>
        </>
    );
}

export default Item;