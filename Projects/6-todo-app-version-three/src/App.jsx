import { AppName } from "./componants/AppName";
import { AddTodo } from "./componants/AddTodo";
import TodoItems from "./componants/TodoItems";
import "./App.css"
import { useState } from "react";



function App() {

  const initialTodoItem = [
    {
      name: "Milk",
      date: "10/04/2023",
    },
    {
      name: "Water",
      date: "10/04/2023",
    },
    {
      name: "Suman",
      date: "09/02/2004",
    }
  ];

  let [TodoItem, setTodoItem] = useState(initialTodoItem);

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <TodoItems TodoItems={TodoItem}/>
      </center>
    </>
  );

}

export default App
