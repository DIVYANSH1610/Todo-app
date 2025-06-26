import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import Welcome from "./components/Welcome";
import TodoItems from "./components/TodoItems";
import "./App.css"; 
import TodoItemsContextProvider from "./components/store/todo-items-store";


function App() {
  return (
    <TodoItemsContextProvider>
      <center className="todo-container">
        <AppName />
        <AddTodo />
        <Welcome></Welcome>
        <TodoItems></TodoItems>
      </center>
      </TodoItemsContextProvider>
  );
}

export default App;