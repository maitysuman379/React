import WelcomeMessage from "./componants/WelcomeMessage";
import { AppName } from "./componants/AppName";
import { AddTodo } from "./componants/AddTodo";
import TodoItems from "./componants/TodoItems";
import { useState } from "react";
import "./App.css"



function App() {

  // let initialTodoItem = [
  //   {
  //     name: "Milk",
  //     date: "10/04/2023",
  //   },
  //   {
  //     name: "Water",
  //     date: "10/04/2023",
  //   },
  //   {
  //     name: "Suman",
  //     date: "09/02/2004",
  //   }
  // ];

  let [TodoItem, setTodoItem] = useState([]);

  const handleOnClick = (itemName, itemData) =>{
    const newTodoItems = [...TodoItem, {name: itemName, date: itemData}];
    setTodoItem(newTodoItems);
  }

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo handleOnClick={handleOnClick}/>
        <WelcomeMessage TodoItem={TodoItem}/>
        <TodoItems TodoItems={TodoItem}/>
      </center>
    </>
  );

};

export default App
