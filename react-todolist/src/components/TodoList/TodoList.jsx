import React, { useRef } from "react";

import classes from "./TodoList.module.css";
import uuid from "react-uuid";
import party from "party-js";

import TodoItem from "../TodoItem/TodoItem";
import Button from "../UI/Button";

const TodoList = (props) => {
  const itemRef = useRef();

  const finishTodoHandler = (e) => {
    party.confetti(e.target, {
      count: party.variation.range(30, 50),
    });
    console.log("완료 함수 실행");
  };

  const modifyTodoHandler = () => {
    console.log("수정 함수 실행");
  };

  const removeTodoHandler = (e) => {
    party.sparkles(e.target, {
      count: party.variation.range(10, 20),
    });
    console.log("삭제 함수 실행");
    // const itemId = itemRef.current.id;
    // props.todoList.filter((todo) => console.dir(todo));
  };

  return (
    <div>
      <ul className={classes["todo-list"]}>
        {props.todoList.map((item) => {
          return (
            <TodoItem ref={itemRef} key={uuid()} id={uuid()}>
              {item}
              <div className={classes.btns}>
                <Button title="수정" onClick={modifyTodoHandler} />
                <Button title="삭제" onClick={removeTodoHandler} />
                <Button title="완료" onClick={finishTodoHandler} />
              </div>
            </TodoItem>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
