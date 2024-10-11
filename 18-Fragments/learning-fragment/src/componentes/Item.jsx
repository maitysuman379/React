import styles from "./Item.module.css";
 
const Item = ({items, bought, handelClick}) =>{

    return (
        <>
          <li className={`${styles.licss} list-group-item ${bought && 'active'}`}>
            <span className={`${styles.spancss}`}>{items}</span>
            <button className={`${styles.buttonCss} btn btn-info`} onClick={handelClick} >buy</button>
          </li>
        </>
    );
}

export default Item;