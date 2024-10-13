import { useContext } from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { TodoItemContext } from "../store/todo-items-store";

function TodoItem({ todoName, todoDate, item}) {

    const handelDeleteItem = useContext(TodoItemContext);
    
    const handelOnClick = () =>{
        handelDeleteItem.handelDeleteItem(item);
    }

    return (
        <>
            <div className="container">
                <div className="row kg-row">
                    <div className="col-6">{todoName}</div>
                    <div className="col-4">{todoDate}</div>
                    <div className="col-2">
                        <button type="button" className="btn btn-outline-danger kg-btn" onClick={handelOnClick}><RiDeleteBin5Fill style={{fontSize: "23px"}}/></button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoItem;