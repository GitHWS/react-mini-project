import React from "react";
import classes from "./TodoItem.module.css";

const TodoItem = React.forwardRef((props, ref) => {
  return (
    <li ref={ref} className={classes["todo-item"]} id={props.id}>
      {props.children}
    </li>
  );
});

export default TodoItem;
