import { TodoItemContext } from "./store/todo-items-store";
import WelcomeMessage from "./componants/WelcomeMessage";
import { AppName } from "./componants/AppName";
import { AddTodo } from "./componants/AddTodo";
import TodoItems from "./componants/TodoItems";
import {  useState } from "react";
import "./App.css"



function App() {

  let [TodoItem, setTodoItem] = useState([]);

  const handleOnClick = (itemName, itemData) =>{
    setTodoItem((currValue)=>{
      const newTodoItems = [...currValue, {name: itemName, date: itemData}];
      return newTodoItems;
    });

    setTodoItem((currValue)=> [...currValue, {name: itemName, date: itemData}]);
  }

  const handelDeleteItem = (item) =>{
    setTodoItem((oldItem)=>{
      let newDeleteItem = [...oldItem];
      let finalItem = newDeleteItem.filter((del)=>del.name !== item.name);
      return finalItem;
    });
  }

  return (
    <TodoItemContext.Provider value={TodoItem}>
      <center className="todo-container">
        <AppName />
        <AddTodo handleOnClick={handleOnClick}/>
        <WelcomeMessage/>
        <TodoItems handelDeleteItem={handelDeleteItem}/>
      </center>
    </TodoItemContext.Provider>
  );

};

export default App
