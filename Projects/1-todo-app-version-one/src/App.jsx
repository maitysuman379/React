import { AppName } from "./componants/AppName";
import { AddTodo } from "./componants/AddTodo";
import { Item1 } from "./componants/TodoItem1";
import { Item2 } from "./componants/TodoItem2";
import "./App.css"



function App() {

  return <center className="todo-container">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="items-container">
    <Item1></Item1>
    <Item2></Item2>
    </div>
  </center>

}

export default App
