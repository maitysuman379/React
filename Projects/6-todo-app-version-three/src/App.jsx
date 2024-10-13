import WelcomeMessage from "./componants/WelcomeMessage";
import { AppName } from "./componants/AppName";
import { AddTodo } from "./componants/AddTodo";
import TodoItems from "./componants/TodoItems";
import { useState } from "react";
import "./App.css"



function App() {

  let [TodoItem, setTodoItem] = useState([]);

  const handleOnClick = (itemName, itemData) =>{
    const newTodoItems = [...TodoItem, {name: itemName, date: itemData}];
    setTodoItem(newTodoItems);
  }

  const handelDeleteItem = (item) =>{
    let newDeleteItem = [...TodoItem];
    let finalItem = newDeleteItem.filter((del)=>del.name !== item.name);
    setTodoItem(finalItem);
  }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo handleOnClick={handleOnClick}/>
        <WelcomeMessage TodoItem={TodoItem}/>
        <TodoItems TodoItems={TodoItem} handelDeleteItem={handelDeleteItem}/>
      </center>
    </>
  );

};

export default App
