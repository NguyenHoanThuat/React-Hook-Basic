import React, { useState } from "react";
import "./App.scss";
import ColorBox from "./components/ColorBox";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

function App() {
  const [todoList, setTodoList] = useState([
    { id: 1, title: "I love Easy Frontend! 😍 " },
    { id: 2, title: "We love Easy Frontend! 🥰 " },
    { id: 3, title: "They love Easy Frontend! 🚀 " },
  ]);

  function handleOnClick(todo) {
    console.log("xxxxxxxxxxx", todo);
    const index = todoList.findIndex((x) => x.id === todo.id);
    console.log("eeeeeeeee", index);
    if (index < 0) return;

    const newTodoList = [...todoList];
    newTodoList.splice(index, 1);
    setTodoList(newTodoList);
  }

  function handleTodoForm(formValue) {
    console.log("qqqqqqq", formValue);
    const newTodo = {
      id: todoList.length + 1,
      ...formValue,
    };
    const newTodoList = [...todoList];
    newTodoList.push(newTodo);
    setTodoList(newTodoList);
  }

  return (
    <div className="App">
      <h1>Welcome to react hooks!</h1>

      <ColorBox />

      <TodoList todos={todoList} onTodoClick={handleOnClick} />

      <TodoForm onSubmit={handleTodoForm} />
    </div>
  );
}

export default App;
