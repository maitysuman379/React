import styles from "./Container.module.css";

const Container = ({children,abcd}) =>{
    return (
        <>
          <div className={styles.ContainerDivCss}>
            {abcd}
            {children}
          </div>
        </>
    );
}

export default Container;