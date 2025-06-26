import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

import "./Welcome.css"
const Welcome=()=>{
  
  const {todoItems} = useContext(TodoItemsContext);
  return todoItems.length===0 &&  <p className="Welcome">Enjoy your Day </p>;
  
}
export default Welcome;