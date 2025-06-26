import { useContext } from "react";
import AddItem from "./AddItem";
import { TodoItemsContext } from "./store/todo-items-store";

const TodoItems = () => {
  const {todoItems} = useContext(TodoItemsContext);
  

  return (
    <div className="item-container">
      {todoItems.map((item) => (
        <AddItem
          key={item.name}
          todoDate={item.dueDate}
          todoItem={item.name}
          
          />
        ))}
        
    </div>
  );
};

export default TodoItems;