function TodoItem({ todoName, todoDate, handelDeleteItem, item}) {

    const handelOnClick = () =>{
        handelDeleteItem(item);
    }

    return (
        <>
            <div className="container">
                <div className="row kg-row">
                    <div className="col-6">{todoName}</div>
                    <div className="col-4">{todoDate}</div>
                    <div className="col-2">
                        <button type="button" className="btn btn-outline-danger kg-btn" onClick={handelOnClick}>Delete</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TodoItem;