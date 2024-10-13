import { useState, useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdLibraryAdd } from "react-icons/md";

export function AddTodo({handleOnClick}) {

  let [todoName, setTodoName] = useState('');
  let [todoDate, setTodeDate] = useState('');
  const noOfUpdates = useRef(0);

  const handleNameOnChange = (event) =>{
    todoName = event.target.value;
    setTodoName(todoName);
    noOfUpdates.current += 1;
  }

  const handleOnDateChange = (event) =>{
    todoDate = event.target.value;
    setTodeDate(todoDate);
    console.log(`${noOfUpdates.current}`);
  }

  const handelAddData = (event) =>{
    handleOnClick(todoName,todoDate);
    setTodeDate('');
    setTodoName('');
    event.preventDefault();
  }

  (() => {
    'use strict'
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
   })() 

  return (
    <>
      <div className="container text-center">
        <form onSubmit={handelAddData} className={`needs-validation`} noValidate>
        <div className="row kg-row">

          <div className="col-6">
            <input type="text" placeholder="Enter todo here" className={`${styles.inputCss} form-control`} onChange={handleNameOnChange} value={todoName} required/>
            <div className="invalid-feedback">Enter Taks</div>
          </div>

          <div className="col-4">
            <input type="date" className={`${styles.inputCss} form-control`} onChange={handleOnDateChange} value={todoDate} required/>
            <div className="invalid-feedback">Enter date</div>
          </div>

          <div className="col-1">
            <button className="btn btn-outline-success kg-btn"> <MdLibraryAdd style={{fontSize: "25px"}}/> </button>
          </div>

        </div>
        </form>
      </div>
    </>
  );
}