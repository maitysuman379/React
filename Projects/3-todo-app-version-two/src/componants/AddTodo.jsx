import styles from "./AddTodo.module.css";

export function AddTodo() {
  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">

          <div className="col-6">
            <input type="text" placeholder="Enter todo here" className={`${styles.inputCss} form-control`} />
          </div>

          <div className="col-4">
            <input type="date" className={`${styles.inputCss} form-control`} />
          </div>

          <div className="col-1">
            <button type="button" className="btn btn-outline-success kg-btn">Add</button>
          </div>

        </div>
      </div>
    </>
  );
}