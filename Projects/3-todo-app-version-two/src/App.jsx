import { AppName } from "./componants/AppName";
import { AddTodo } from "./componants/AddTodo";
import TodoItems from "./componants/TodoItems";
import "./App.css"



function App() {

  const TodoItem = [
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
