import { useRef } from "react";
import styles from "./AddTodo.module.css";
import { MdLibraryAdd } from "react-icons/md";

export function AddTodo({handleOnClick}) {

  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const handelAddData = (event) =>{
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const todoDate = todoDateElement.current.value;
    todoNameElement.current.value = '';
    todoDateElement.current.value = '';
    handleOnClick(todoName,todoDate);
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
            <input type="text" ref={todoNameElement} placeholder="Enter todo here" className={`${styles.inputCss} form-control`} required/>
            <div className="invalid-feedback">Enter Taks</div>
          </div>

          <div className="col-4">
            <input type="date" ref={todoDateElement} className={`${styles.inputCss} form-control`} required/>
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