import { useState } from "react";
import TodoForm from "../TodoForm/TodoForm";
import TodoList from "../TodoList/TodoList";
import classes from "./TodoWrapper.module.css";

const TodoWrapper = ({ todoList }) => {
  const [list, setList] = useState([]);

  const addTodoHandler = (newTodo) => {
    setList((prev) => [...prev, newTodo]);
  };

  return (
    <div className={classes.wrapper}>
      <h1>오늘 할 일</h1>
      <TodoForm addTodo={addTodoHandler} todoList={list} />
      <TodoList todoList={list} />
    </div>
  );
};

export default TodoWrapper;
