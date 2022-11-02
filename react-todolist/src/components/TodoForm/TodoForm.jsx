import { useState, useRef, useEffect } from "react";
import classes from "./TodoForm.module.css";

const TodoForm = ({ addTodo, todoList }) => {
  // console.log("TodoForm 렌더링");
  const [input, setInput] = useState("");
  const [isValid, setIsValid] = useState();

  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  useEffect(() => {
    if (isValid === undefined || input === "") return;
    validateInputHandler();
  }, [input, isValid]);

  const changeInputHandler = (e) => {
    setInput(e.target.value);
  };

  const validateInputHandler = () => {
    if (inputRef.current.value !== "") {
      setIsValid(true);
      return;
    }
    setIsValid(false);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    validateInputHandler();

    if (input !== "") {
      addTodo(input);
      localStorage.setItem("list", todoList);
      setInput("");
    } else {
      inputRef.current.focus();
    }
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input
        ref={inputRef}
        type="text"
        placeholder="오늘 할 일을 입력해주세요 :)"
        value={input}
        onChange={changeInputHandler}
        className={isValid === false ? classes.invalid : ""}
      />
      <button type="submit">등록</button>
    </form>
  );
};

export default TodoForm;
