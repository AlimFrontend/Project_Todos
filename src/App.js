import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import TodoForm from "./components/Todos/TodoForm";
import TodoList from "./components/Todos/TodoList";
import TodosActions from "./components/Todos/TodosActions";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodoHandler = (text) => {
    const newTodo = {
      text,
      isComplited: false,
      id: uuidv4(),
    };
    setTodos([...todos, newTodo]);
  };
  const deleteTodoHandler = (id) =>
    setTodos(todos.filter((todo) => todo.id !== id));

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, isComplited: !todo.isComplited }
          : { ...todo }
      )
    );
  };

  const resetTodosHandler = () => {
    setTodos([]);
  };
  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isComplited));
  };

  const completedTodos = todos.filter((todo) => todo.isComplited).length;

  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length > 0 && (
        <TodosActions
          completedTodos={!!completedTodos}
          resetTodo={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
        />
      )}
      <TodoList
        todos={todos}
        deleteTodo={deleteTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodos > 0 && (
        <h3>{`You have completed ${completedTodos} todo!`}</h3>
      )}
    </div>
  );
}

export default App;