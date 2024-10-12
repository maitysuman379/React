import { useState } from "react";
import styles from "./AddTodo.module.css";

export function AddTodo({handleOnClick}) {

  let [todoName, setTodoName] = useState('');
  let [todoDate, setTodeDate] = useState('');

  const handleNameOnChange = (event) =>{
    todoName = event.target.value;
    setTodoName(todoName);
  }

  const handleOnDateChange = (event) =>{
    todoDate = event.target.value;
    setTodeDate(todoDate);
  }

  const handelAddData = () =>{
    handleOnClick(todoName,todoDate);
    setTodeDate('');
    setTodoName('');
  }

  return (
    <>
      <div className="container text-center">
        <div className="row kg-row">

          <div className="col-6">
            <input type="text" placeholder="Enter todo here" className={`${styles.inputCss} form-control`} onChange={handleNameOnChange} value={todoName}/>
          </div>

          <div className="col-4">
            <input type="date" className={`${styles.inputCss} form-control`} onChange={handleOnDateChange} value={todoDate}/>
          </div>

          <div className="col-1">
            <button type="button" className="btn btn-outline-success kg-btn" onClick={handelAddData}>Add</button>
          </div>

        </div>
      </div>
    </>
  );
}