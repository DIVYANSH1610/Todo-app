import { useContext } from "react";
import { TodoItemsContext } from "./store/todo-items-store";

function AddItem( {todoItem,todoDate}){
 const {deleteItem} =useContext(TodoItemsContext)
  return (
    <div className="container ">
        <div className="row er">
          <div className="col-6">{todoItem}</div>
          <div className="col-4">{todoDate}</div>
          <div className="col-2"><button type="button" className="btn btn-danger"
          onClick={()=> deleteItem(todoItem)}>Delete</button>
          </div>
        </div>
      </div>   
  );    
};
export default AddItem;