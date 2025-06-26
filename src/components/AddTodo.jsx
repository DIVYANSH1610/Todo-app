import {useContext, useRef } from "react";
import "./AddTodo.css";
import { TodoItemsContext } from "./store/todo-items-store";
function AddTodo() {
  const {addNewItem} = useContext(TodoItemsContext);
  const todoNameElement= useRef();
  const dueDateElement= useRef();
 
  const handleAddButtonClickked = (event) => {
    event.preventDefault();
    const todoName= todoNameElement.current.value;
    const dueDate= dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    addNewItem(todoName, dueDate);

   
  };
  return (
    <form className="container text-center"
     onSubmit={handleAddButtonClickked}>
      <div className="row ">
          <div className="col-6">
            <input
              className="input-data"
              type="text"
              ref={todoNameElement}
              placeholder="Enter todo here"
            />
          </div>
          <div className="col-4">
            <input
              className="input-data"
              type="date"
              ref={dueDateElement}
            />
          </div>
          <div className="col-2">
            <button
              className="btn btn-success add"
            >
              Add
            </button>
          </div>
      </div>
    </form>
  );
}
export default AddTodo;
